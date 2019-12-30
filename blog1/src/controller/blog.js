const getList = (author, keyword) => {
    // mockData
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1576161757458,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1576161780036,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1576161757458,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象 包含title content属性
    return {
        id: 3,  //  表示新建博客成功，返回插入数据表的id
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('-----id-----', id, blogData);
    // id是更新博客的id
    // blogData 是一个博客对象 包含title content属性
    return false;
}

const deleteBlog = (id) => {
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog,
}
