
function add1()
{
document.querySelector("#one").value+="1";
}

function add2()
{
    document.querySelector("#one").value+="2";
    }

function add3()
{
        document.querySelector("#one").value+="3";
        }

function add4()
{
            document.querySelector("#one").value+="4";
            }

function add5()
{
                document.querySelector("#one").value+="5";
                }

function add6()
{
     document.querySelector("#one").value+="6";

                    }


function add7()
{
    document.querySelector("#one").value+="7";
                        }

function add8()
{
     document.querySelector("#one").value+="8";
        }

 function add9()
 {
      document.querySelector("#one").value+="9";

                  }



function plus()
{
     document.querySelector("#one").value+="+";
}


function minus()
{
     document.querySelector("#one").value+="-";
}


function divide()
{
     document.querySelector("#one").value+="/";
}


function multiply()
{
     document.querySelector("#one").value+="*";
}


function action()
{

    
    document.querySelector("#one").value = eval(document.querySelector("#one").value);
  
}


function cancel()
{
    let canceled =document.querySelector("#one").value;
    document.getElementById("one").value=canceled.slice(0,-1);
}


function Sin()
{
    document.querySelector('#one').value= Math.sin( document.querySelector('#one').value);
}

function Cos()
{
    document.querySelector('#one').value= Math.cos( document.querySelector('#one').value);
}

function Tan()
{
    document.querySelector('#one').value= Math.tan( document.querySelector('#one').value);
}