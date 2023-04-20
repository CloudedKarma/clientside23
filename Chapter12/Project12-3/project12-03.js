"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:   

      Filename: project12-03.js
*/

$("article > h2").click(function() {
      // Toggle the “minus” and “plus” classes on the clicked heading
      $(this).toggleClass("minus");
    
      // Toggle the visibility of the list immediately following the clicked heading
      var heading = $(this);
      var list = heading.next();
      list.slideToggle(500);
    
      // Change the src attribute of the image to “minus.png” or “plus.png” depending on the visibility of the list
      var headingImage = heading.children("img");
      var src = headingImage.attr("src");
      if (src === "plus.png") {
        headingImage.attr("src", "minus.png");
      } else {
        headingImage.attr("src", "plus.png");
      }
    });
    
    