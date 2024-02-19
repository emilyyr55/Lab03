const util = require('./utilController');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:showController');


module.exports.blogList = async function (req, res) {
    res.render('blog-list', { title: 'Blog List', 
    blogs: [
      {
        "blogTitle": "Did I do it?",
        "createdOn": "2024-02-19T23:23:55.107Z",
    },
    {
        "blogTitle": "I really hope this is gonna show up on my blog!",
        "blogText": "p.s. this took a long time",
        "createdOn": "2024-02-19T23:23:55.107Z",
        "_id": "65caad601d6f2ba6a81113c6"
    },
    {
        "blogTitle": "I killed this assignment :0",
        "createdOn": "2024-02-19T23:23:55.108Z",
        "_id": "65caad751d6f2ba6a81113c7"
    },
    
    ] });
  
}

/* GET 'Add review' page */
module.exports.addBlog = function(req, res){
    res.render('add-blog', { title : 'Add Blog',});
};

module.exports.editBlog = function(req, res){
    res.render('edit-blog', { title : 'Edit Blog',});
};

module.exports.deleteBlog = function(req, res){
    res.render('delete-blog', { title : 'Delete Blog',});
};
