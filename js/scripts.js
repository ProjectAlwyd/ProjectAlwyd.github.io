/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var blogData;

function loadBlog(){
    
    
    console.log(window.location.href);
    var fragment = grabFragment()
    console.log(fragment)
    // load data
    fetch('./data/' + fragment + '.json')
      .then(response => response.json())
      .then(data => {
        // Use the JSON data here
        blogData = data;
        console.log(blogData.title);

        document.getElementById("pageTitle").innerHTML = blogData.title;
        document.getElementById("blogDate").innerHTML = blogData.date;
        document.getElementById("blogAuthor").innerHTML = "Author: " + blogData.author;
        document.getElementById("blogImage").src = "./assets/" + blogData.blogImage;
        document.getElementById("blogBody").innerHTML = "<br/>" + blogData.blogBody;
      })
      .catch(error => console.error('Error loading JSON:', error));
      
      
      
      //place data in right spot


}

function grabFragment(){
    var url = window.location.href;
    url = url.split("#")[1];
    return url
}