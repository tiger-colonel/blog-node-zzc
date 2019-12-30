const { 
    getList, 
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog,
} = require('../controller/blog');

const {SuccessModal, ErrorModal} = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const id = req.query.id;
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
        
        const detailData = getDetail(id)
        return new SuccessModal(detailData, {
            msg: '这是博客详情接口'
        });
    }

    // 新建博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body);

        return new SuccessModal(data);
    }

    // 更新博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body);
        if (result) {
            return new SuccessModal()
        } else {
            return new ErrorModal('更新失败')
        }
    }

    // 删除博客
    if (method === 'POST' && req.path === '/api/blog/delete') {
        const result = deleteBlog(id)
        if (result) {
            return new SuccessModal()
        } else {
            return new ErrorModal('删除失败')
        }
    }
}

module.exports = handleBlogRouter;
