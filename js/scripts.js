/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
fetch('./data/blogs.json')
  .then(response => response.json())
  .then(data => {
    // Use the JSON data here
    console.log(data);
  })
  .catch(error => console.error('Error loading JSON:', error));

function loadBlog(){
    
    document.getElementById("pageTitle").innerHTML = "No Data Found";
    console.log(window.location.href);
    console.log(grabFragment());
}

function grabFragment(){
    var url = window.location.href;
    url = url.split("#")[1];
    return url
}