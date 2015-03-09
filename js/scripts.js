/*! jqlouds - v - 2014-07-06
* https://github.com/enricodeleo/jqlouds
* Copyright (c) 2014 Enrico Deleo; Licensed MIT */



options = {
  src: 'img/new-cloud.png', // path to image, the default is a base64 (you can see the actual string in sources)
  maxWidth: 300, // max image's width
  maxHeight: 200, // amx image's height
  minClouds: 7, // minimum amount of clouds
  maxClouds: 10, // maximum amount of clouds
  skyHeight: null, // height of the container element
  wind: true, // animate clouds, default is false
};

$('#sky').jQlouds(options);

console.log(jQlouds)