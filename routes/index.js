var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();

  posts = posts.slice((posts.length - 3), posts.length).reverse();

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/posts', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('posts', { title: 'Posts', posts: posts });
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post });

});

// --- PROJECTS ---
router.get('/projects', function(req, res, next) {
  var projects = projectsService.getProjects();

  res.render('projects/projects', { title: 'Projects', projects: projects });
});

router.get('/projects/:projectId', function(req, res, next) {
  var projectId = req.params.projectId;

  var projects = projectsService.getProjects();

  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('projects/project', { title: project.name, project: project });

});

module.exports = router;
