var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
    path = require('path');

var rootPath = path.normalize(__dirname + '/../');

module.exports = function(app) {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns', 
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(express.static(rootPath + '/dist/dev'));

  // on index.html file express will take src="/vendor" references and point to this path
  app.use('/vendor', express.static(rootPath + '/public/vendor'));

  // on index.html file express will take src="/styles.css" file references and point to this file
  app.use('/styles.css', express.static(rootPath + '/public/styles.css'));
}