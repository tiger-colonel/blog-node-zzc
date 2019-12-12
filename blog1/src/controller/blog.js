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

const newBlog = (data) => {
    
}

module.exports = {
    getList,
    getDetail,
}
