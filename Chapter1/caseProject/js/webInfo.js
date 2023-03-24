if (navigator.appName === "Google Chrome") 
 {
    alert("You are using Google Chrome");
 } 
 else if (navigator.appName === "Microsoft Internet Explorer") 
 {
    alert("You are using Microsoft Internet Explorer");
 } 
 else if (navigator.appName === "Safari") 
 {
    alert("You are using Safari");
 } 
 else 
 {
    alert("You are using a browser other than Google Chrome, Microsoft Internet Explorer, or Safari.");
 }
 navigator.geolocation.getCurrentPosition(function(position) 
 {
    const latitude = position.coords.latitude.toFixed(2);
    const longitude = position.coords.longitude.toFixed(2);
    const message = `Your current location is: ${latitude}° N, ${longitude}° W`;
    alert(message);
 });
 if (navigator.platform.includes("Win")) 
 {
    alert("You are using Windows");
  } 
  else if (navigator.platform.includes("Mac")) 
  {
    alert("You are using MacOS");
  } 
  else if (navigator.platform.includes("Linux")) 
  {
    alert("You are using Linux");
  } 
  else 
  {
    alert("You are using a platform other than Winodws, MacOS, or Linux");
  }
  if (screen.availHeight < 600) 
  {
    alert("Your usable screen has a height less than 600px");
  } 
  else if (screen.availHeight < 800) 
  {
    alert("Your usable screen has a height less than 800px");
  } 
  else 
  {
    alert("Your usable screen has a height greater than 800px");
  }
  if (screen.availWidth < 1000) 
  {
    alert("Your usable screen has a width less than 1000px");
  } 
  else if (screen.availWidth < 1200) 
  {
    alert("Your usable screen has a width less than 1200px");
  } 
  else 
  {
    alert("Your usable screen has a width greater than 1200px");
  }
 if (navigator.language.startsWith("en")) 
 {
   alert("Your browser's default language is English");
 }
  else 
  {
    alert("Your browser's default language is not English");
  }