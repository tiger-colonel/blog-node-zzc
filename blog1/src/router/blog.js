const {SuccessModel, ErrorModel} = require('../model/resModal.js');
const { 
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
} = require('../controller/blog.js');

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
        req.body.author = 'zhangsan';
        return newBlog(req.body).then(newBlogData => {
            return new SuccessModel(newBlogData, '创建成功')
        }).catch(err => {
            return new ErrorModel(err, '创建失败')
        })
    }

    if (method === 'POST' && req.path === '/api/blog/update') {
        return updateBlog(id, req.body).then(updateBlogData => {
            return new SuccessModel(updateBlogData, '更新成功')
        }).catch(err => {
            return new ErrorModel('更新博客失败')
        })
    }

    if (method === 'POST' && req.path === '/api/blog/delete') {
        const author = 'zhangsan';
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
