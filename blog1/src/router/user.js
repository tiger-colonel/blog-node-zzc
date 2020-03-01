const {login} = require('../controller/user.js');
const {SuccessModel, ErrorModel} = require('../model/resModal.js');

const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        return login(req.body).then(loginData => {

            if (loginData.username) {
                return new SuccessModel(loginData, '登录成功')
            } else {
                return new ErrorModel('登录失败')
            }
        }).catch(err => {
            return new ErrorModel('登录失败')
        })
    }
}

module.exports = handleUserRouter;
