const {SuccessModel, ErrorModel} = require('../model/resModal.js');
const { 
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blog.js');

const loginCheck = (req) => {
    if (!req.session.username) {
        return Promise.resolve(new ErrorModel('尚未登录'));
    }
    
}

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const {id = ''} = req.query;

    if (method === 'GET' && req.path === '/api/blog/list') {
        const {author = '', keyword = ''} = req.query;
        return getList(author, keyword).then(data => {
            return new SuccessModel(data, '请求成功');
        });
    }

    if (method === 'GET' && req.path === '/api/blog/detail') {
        return getDetail(id).then(detail => {
            return new SuccessModel(detail, '请求成功')
        }).catch(err => {
            return new ErrorModel(err, '请求失败')
        })
    }

    if (method === 'POST' && req.path === '/api/blog/new') {
        const loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheck
        }

        req.body.author = req.session.username;

        return newBlog(req.body).then(newBlogData => {
            return new SuccessModel(newBlogData, '创建成功')
        }).catch(err => {
            return new ErrorModel(err, '创建失败')
        })
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        const loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheck
        }

        return updateBlog(id, req.body).then(updateBlogData => {
            return new SuccessModel(updateBlogData, '更新成功')
        }).catch(err => {
            return new ErrorModel('更新博客失败')
        })
    }

    if (method === 'POST' && req.path === '/api/blog/delete') {
        const loginCheckResult = loginCheck(req);
        if (loginCheckResult) {
            return loginCheck
        }

        let author = req.session.username;

        return deleteBlog(id, author).then(deleteBlogData => {
            if (deleteBlogData) {
                return new SuccessModel(deleteBlogData, '删除成功')
            } else {
                return new ErrorModel('删除博客失败')
            }
        }).catch(err => {
            return new ErrorModel('删除博客失败')
        })
    }
}

module.exports = handleBlogRouter;
