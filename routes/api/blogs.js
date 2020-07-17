//Imports
const 
    express = require('express'),
    router = express.Router();

//Blog Model
const Blog = require('../../models/Blog');

//@route GET api/blogs
//@desc Get all blogs
router.get('/', (req,res) => {
    Blog.find()
        .sort({ date: -1 })
        .then(blogs => res.json(blogs));
})

//@route POST api/blogs
//@desc Post a new blog
router.post('/', (req,res) => {
    const newBlog = new Blog({
        title: req.body.title,
        message: req.body.message
    });

    newBlog
        .save()
        .then(blog => res.json(blog));
});

//@route DELETE api/blogs/id
//@desc Deletes a blog
router.delete('/:id',(req,res) => {
    Blog.findById(req.params.id)
        .then(blog => blog.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})

//export router after routes are set
module.exports = router;