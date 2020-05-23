/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  /* Alert when form is submitted*/
  function Warn() {
    alert ("Your message has been sent. Thank you!");
    document.write ("Your message has been sent. Thank you!");
  }