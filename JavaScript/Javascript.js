$(document).ready(function(){
   var toFar;
   var toCel;
   var toKel;
   var kelTofar;
   var kelTocel;
   var radiovalue;
   var radiovalueTo;
    $("#Convert").click(function(){
       
        var input = $("#tempInput").val();
        if(input != ""){
             input = parseFloat(input);
              radiovalue = $("input[name='selectUnit']:checked").val();
              radiovalueTo = $("input[name='Converto']:checked").val();

                if(radiovalue == "Farenheit" && radiovalueTo == "Celsius"){
                 toFar = (input - 32) * (.5556); 
                $("#output").val("Result: " + toFar);
            }
            else if(radiovalue == "Celsius" && radiovalueTo == "Farenheit"){
                toCel = (input * 1.8) + 32;
                $("#output").val("Result: " + toCel);
            }else if(radiovalue == "Farenheit" && radiovalueTo == "Kelvin"){
                toKel = ((input - 32) * (.5556)) + 273.16; 
                $("#output").val("Result: " + toKel);
            }else if(radiovalue == "Celsius" && radiovalueTo == "Kelvin"){
                toKel = input  + 273.16; 
                $("#output").val("Result: " + toKel);
            }else if(radiovalue == "Kelvin" && radiovalueTo == "Farenheit"){
                kelTofar = 1.8 * (input - 273.16) + 32; 
                $("#output").val("Result: " + kelTofar);
            }
            else if(radiovalue == "Kelvin" && radiovalueTo == "Celsius"){
                kelTocel = input - 273.16; 
                $("#output").val("Result: " + kelTocel);
            }else{
                alert("Invalid Operation Selection");
            }
        }
        else{
            alert("Value Is not Entered")
        }
    })
})