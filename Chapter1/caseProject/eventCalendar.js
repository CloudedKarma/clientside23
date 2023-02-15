/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Kadin Dengler
     Date:   02/02/23

     Filename: js03.js
 */
     let weekDays = new Array(7);
     weekDays[0] = "Sunday";
     weekDays[1] = "Monday";
     weekDays[2] = "Tuesday";
     weekDays[3] = "Wednesday";
     weekDays[4] = "Thursday";
     weekDays[5] = "Friday";
     weekDays[6] = "Satarday";
     
     window.addEventListener("load", addWeekDays);
     
     // write the contents of the weekdays array into the seven tables heading cells (th) using the while loop
     function addWeekDays() 
     {
         let i = 0;  // Initial value of the array; counter value
     
         // reference the collection of heading cells
         let headingCells = document.getElementsByTagName("th");
     
         // write each of the 7 days into the heading cells
         while (i < 7)
         {
             headingCells[i].innerHTML = weekDays[i];  // put weekdays[i] in the th[i]
             i++;
         }
     }
     
     window.addEventListener("load", showGames);
     // function to write the game information into the calendar
     function showGames()
     {
         for(let i = 0; i < discountDays.length; i++)
         {
             let gameInfo = "";
     
             gameInfo += discountLocation[i] + "<br>";
             gameInfo += discount[i] + "%";
     
             gameInfo += "</p>";
            if (discount[i] > 50)
            {
                gameInfo += "Great Discount";
            }
            else if (discount[i] > 20)
            {
                gameInfo += "Good Discount";
            }
            else
            {
                gameInfo += "No Discount";
            }
             let tableCell = document.getElementById(discountDays[i]);
             tableCell.insertAdjacentHTML("beforeend", gameInfo);
         }
         
     }