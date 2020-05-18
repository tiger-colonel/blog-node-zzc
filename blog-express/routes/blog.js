var express = require('express');
var router = express.Router();

const { 
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blog');

router.get('/list', (req, res, next) => {
    res.json({
        errno: 0,
        data: [1,2,3]
    })
});
router.get('/detail', (req, res, next) => {
    res.json({
        errno: 0,
        data: [1,2,3]
    })
});
router.get('/new', (req, res, next) => {
    res.json({
        errno: 0,
        data: [1,2,3]
    })
});
router.post('/update', (req, res, next) => {
    res.json({
        errno: 0,
        data: [1,2,3]
    })
});
router.post('/delete', (req, res, next) => {
    res.json({
        errno: 0,
        data: [1,2,3]
    })
});

module.exports = router;
