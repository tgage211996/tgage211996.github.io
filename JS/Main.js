window.onscroll = function() {myFunction()};
    
    function myFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("self-intro").style.animationName= "Backward";
      } else {
        document.getElementById("self-intro").style.animationName= "Forward";
      }
    }