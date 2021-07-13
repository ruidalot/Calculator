var firstMathExp = null;


function insert() {
    document.getElementById('display').innerHTML = "0";
}

function cc_insert(number) {
    
    var result = document.getElementById("display").innerHTML;
    var mini = document.getElementById("miniDisplay").innerHTML;


    if((result == '0' || result == 'E') && number != '.') {
        document.getElementById("display").innerHTML=number;
        document.getElementById("miniDisplay").innerHTML=number;

    }

    else if (result.length<9 && result.substring(0,1) == "-") {
        document.getElementById("display").innerHTML=result+number;
        document.getElementById("miniDisplay").innerHTML= mini + number;
    }

    else if (result.length <8 && result.substring(0,1) != "-") {
        document.getElementById("display").innerHTML=result+number;
        document.getElementById("miniDisplay").innerHTML= mini + number;
    }
} 

    

function cc_insertPositiveNegative() {
    var result = document.getElementById('display').innerHTML;
    var firstchar = result.substring(0,1);
    if( firstchar == '-') {
        document.getElementById("display").innerHTML=result.substring(1,result.length);
    }
    else if(firstchar != "0") {
        document.getElementById("display").innerHTML="-"+result;
    }
}


function cc_clearAll() {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("miniDisplay").innerHTML = "";
    firstMathExp = "";
                
}

function cc_clearCe() {
    
    document.getElementById('display').innerHTML = '';
    document.getElementById('miniDisplay').innerHTML = '';
}

function cc_clearOne() {
    var result = document.getElementById("display").innerHTML;

    if(result.length == 1) {
        document.getElementById("display").innerHTML ="0";
    }
    else {
        document.getElementById("display").innerHTML = result.substr(0, result.length - 1);
    }

    
}



function cc_insertOperation(operation) {
    var result = document.getElementById("display").innerHTML;

    switch (operation) {
        case '/':
            firstMathExp=result + '/';
            document.getElementById("display").innerHTML="";
            document.getElementById("miniDisplay").innerHTML="/";
            break;
        case '*':
            firstMathExp = result + '*';
            document.getElementById("display").innerHTML = "";
            document.getElementById("miniDisplay").innerHTML="*";
            break;
        case '+':
            firstMathExp = result + '+';
            document.getElementById("miniDisplay").innerHTML="+";
            document.getElementById("display").innerHTML = "";
            break;
        case '-':
            firstMathExp = result + '-';
            document.getElementById("miniDisplay").innerHTML="-";
            document.getElementById("display").innerHTML = "";
            break;
    }


}


function cc_equal() {
    var result = document.getElementById("display").innerHTML;
    var mathExp = firstMathExp + result;
    document.getElementById('display').innerHTML = eval(mathExp);
} 


function changeMode() {
    var modeOn= document.getElementById('modeDayNight').innerHTML;

    if(modeOn == "Day Mode") {
        document.getElementById("modeDayNight").innerHTML = "Night Mode";
        document.getElementById("modeChange").href="styles/black.css";
    }
    if (modeOn == "Night Mode")
     {
        document.getElementById("modeDayNight").innerHTML = "Day Mode";
        document.getElementById("modeChange").href="styles/white.css";
    }           
}