var globalString = "This is a global variable";

function sampleFunction() {
  alert(globalString);
  globalString = "This is a global variable update!!";
  alert(globalString);
}

alert(globalString);
sampleFunction();
alert(globalString);

$(document).ready(function() {

  $("div#click-one").click(function(event) {
    whatToSay = "Hello!";
    alert(whatToSay);
  });

  $("div#click-two").click(function(event) {
    alert(whatToSay);
  });
});
