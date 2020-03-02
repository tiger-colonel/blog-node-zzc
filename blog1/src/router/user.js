const {login} = require('../controller/user.js');
const {SuccessModel, ErrorModel} = require('../model/resModal.js');
const { set } = require('../db/redis')

const getCookieExpires = () => {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    return d.toGMTString();
}
const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'GET' && req.path === '/api/user/login') {
        // const {username, password} = req.body;
        const {username, password} = req.query;
        return login(username, password).then(loginData => {
            if (loginData.username) {
                // 设置session
                req.session.username = loginData.username;
                req.session.realname = loginData.realname;
                set(req.sessionId, req.session);

                // let expires = getCookieExpires();
                // res.setHeader('Set-Cookie', `username=${loginData.username}; path=/; httpOnly; expires=${expires}`);

                return new SuccessModel(loginData, '登录成功')
            } else {
                return new ErrorModel('登录失败')
            }
        }).catch(err => {
            return new ErrorModel('登录失败')
        })
    }

    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return Promise.resolve(new SuccessModel({
                session: req.session,
            }))
        }
        return Promise.resolve(new ErrorModel('尚未登录'));
    }
}

module.exports = handleUserRouter;
