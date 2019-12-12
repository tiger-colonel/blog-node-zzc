const { getList, getDetail} = require('../controller/blog');
const {SuccessModal, ErrorModal} = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const method = req.method;

    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);
        return new SuccessModal(listData, {
            msg: '这是博客列表接口',
        })
    }

    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id;
        const detailData = getDetail(id)
        return new SuccessModal(detailData, {
            msg: '这是博客详情接口'
        });
    }

    // 新建博客
    if (method === 'POST' && req.path === '/api/blog/new') {

        return {
            msg: '这是新建博客接口'
        }
    }

    // 更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '这是更新博客接口'
        }
    }

    // 删除博客
    if (method === 'POST' && req.path === '/api/blog/delete') {
        return {
            msg: '这是删除博客接口'
        }
    }
}

module.exports = handleBlogRouter;
