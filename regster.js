function test(){
    var tel=document.getElementById("mobil").value;              //the id of the phone number
    var str=document.getElementById("pass").value;              //the id of the password
    var fnam=document.getElementById("fname").value;             //the id of the first name
    var snam=document.getElementById("sname").value;            //the id of the second name
    document.getElementById("phon").innerHTML="";
    document.getElementById("numloc").innerHTML="";
    document.getElementById("namm").innerHTML="";
    document.getElementById("nam2").innerHTML="";
    if(fnam.length<2 || fnam.search(/[0-9]/)>-1){
       document.getElementById("namm").innerHTML="write a right name";
       return false; 
    }
    else if(snam.length<2 || snam.search(/[0-9]/)>-1){
        document.getElementById("nam2").innerHTML="write a right name";
        return false; 
     }

    else if(tel.length!=11){
        document.getElementById("phon").innerHTML="write a right phone number";  
        return false;
    }
    else if(tel[0].match(/0/)!="0" || tel[1].match(/1/)!="1" ){
        document.getElementById("phon").innerHTML="write a right phone number";  
        return false;                        

    }
    else if (isNaN(tel)){
        document.getElementById("phon").innerHTML="write a right phone number";  
        return false;                        

    }
    else if(str.length!=8){
        document.getElementById("numloc").innerHTML="only 8 character";  
        return false;
    }
    else if(!str[0].match(/[A-Z]/g)){
        
        document.getElementById("numloc").innerHTML="the first charcter must be capital";
        return false;
    }

    else if(str.search(/[0-9]/)==-1){
        document.getElementById("numloc").innerHTML="Enter at least one digit";
        return false;
    }
    else if(str.length!=8){
        document.getElementById("numloc").innerHTML="only 8 character";  
        return false;
    }
    else if(str.search(/ /)!=-1){
        document.getElementById("numloc").innerHTML="no spaces";
        return false;
    }
    if(str.search(/&/)==-1 && str.search(/#/)==-1 && str.search(/[*]/)==-1 && str.search(/-/)==-1 && str.search(/_/)==-1){
        document.getElementById("numloc").innerHTML="at least one special character";  
        return false;                        

    }
    else{
        return true;
    }
}