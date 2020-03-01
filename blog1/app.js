const querystring = require('querystring');

const handleBlogRouter = require('./src/router/blog.js');
const handleUserRouter = require('./src/router/user.js');

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({});
            return;
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }
        let postData = '';
        req.on('data', chunk => {
            postData += chunk;
        })
        req.on('end', () => {
            if (!postData) {
                resolve({});
                return ;
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
}

const serverHandle = (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const url = req.url;
    req.path = url.split('?')[0];

    req.query = querystring.parse(url.split('?')[1]);

    // 解析cookie

    getPostData(req).then(postData => {
        req.body = postData;

        const blogResult = handleBlogRouter(req, res);
        if (blogResult) {
            blogResult.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                );
                return;
            }).catch(err => {
                console.log('-----handleBlogRouter Error-----', err);
            });
        };

        const userResult = handleUserRouter(req, res);
        if (userResult) {
            userResult.then(userData => {
                res.end(
                    JSON.stringify(userData)
                )
                return
            }).catch(err => {
                console.log('-----handleUserRouter Error-----', err);
            });
        }
    }).catch((err) => {
        console.log('-----catch Error-----', err);
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write(`catch error is ${err}`)
        res.end();
    })
}

module.exports = serverHandle;
