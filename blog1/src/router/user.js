const {checkLogin} = require('../controller/user');

const {SuccessModal, ErrorModal} = require('../model/resModel');

const handleUserRouter = (req, res) => {
    const method = req.method;

    // 登录接口
    if (method === 'POST' && req.path === '/api/user/login') {
        const {username, password} = req.body;
        const result = checkLogin(username, password);
        if (result) {
            return new SuccessModal()
        } else {
            return new ErrorModal('登录失败')
        }
    }
}

module.exports = handleUserRouter;
