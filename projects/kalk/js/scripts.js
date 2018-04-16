function shrink()
  {
      var width = document.getElementById("eingabe").offsetWidth;
      var height = document.getElementById("eingabe").offsetHeight;
      var x = document.getElementById("input").value;
      var length = x.length;
      var size = width / length * 1.7;
      if(size >= 30){
        var size = 30;
      }
      document.getElementById("input").style.fontSize = size + "px";
      var width = document.getElementById("ergebnis").offsetWidth;
      var height = document.getElementById("ergebnis").offsetHeight;
      var x = document.getElementById("output").value;
      var length = x.length;
      var size = width / length * 1.6;
      if(size >= 92){
        var size = 92;
      }
      document.getElementById("output").style.fontSize = size + "px";
      var y = document.getElementById("input").value;
      var clength = y.length;
      if(clength > 0){
        document.getElementById("modus").style.display = "none";
        document.getElementById("clear").style.display = "inline";
      }
      else{
        document.getElementById("modus").style.display = "inline";
        document.getElementById("clear").style.display = "none";
      }
      document.getElementById("eq").style.animationName = "none";
  }
  function changeMode(){
    var mode = document.getElementById("mode").getAttribute("href");
    if ( mode == "css/light.css"){
      document.getElementById("mode").setAttribute("href", "css/black.css");
    }
    else if ( mode == "css/black.css"){
      document.getElementById("mode").setAttribute("href", "css/dark.css");
    }
    else if ( mode == "css/dark.css"){
      document.getElementById("mode").setAttribute("href", "css/blue.css");
    }
    else if ( mode == "css/blue.css"){
      document.getElementById("mode").setAttribute("href", "css/light.css");
    }
    else if ( mode == "css/pi.css"){
      document.getElementById("mode").setAttribute("href", "css/light.css");
    }
  }
  function menuOpen(){
    document.getElementById("menuopen").style.display = "none";
    document.getElementById("menuclose").style.display = "inline";
    document.getElementById("menucontent").style.width = "100%";
    document.getElementById("textbox").style.opacity = "1";
  }
  function menuClose(){
    document.getElementById("menuopen").style.display = "inline";
    document.getElementById("menuclose").style.display = "none";
    document.getElementById("menucontent").style.width = "0%";
    document.getElementById("textbox").style.opacity = "0";
  }
  function satan(){
    Calc.Input.value += '6';
    if(Calc.Input.value == 3.14159265358979323846){
      document.getElementById("mode").setAttribute("href", "css/pi.css");
    }
  }
  function clearAll(){
    Calc.Input.value = '';
    Eq.Input.value = '';
    shrink();
    document.getElementById("eq").style.animationName = "clear";
  }
