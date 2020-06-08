function test(){
    var tel=document.getElementById("mobil").value;              //the id of the phone number
    var str=document.getElementById("pass").value;              //the id of the password
    var fnam=document.getElementById("fname").value;             //the id of the first name
    var snam=document.getElementById("sname").value;            //the id of the second name

    if(fnam.length<2 || fnam.search(/[0-9]/)>-1){
       alert("write a right first name");
       return false; 
    }
    else if(snam.length<2 || snam.search(/[0-9]/)>-1){
        alert("write a correct last name");
        return false; 
     }

    else if(tel.length!=11){
        alert("write a correct phone number");
        return false;
    }
    else if(tel[0].match(/0/)!="0" || tel[1].match(/1/)!="1" ){
        alert("write a correct phone number");  
        return false;                        

    }
    else if (isNaN(tel)){
        alert("write a correct phone number");  
        return false;                        

    }
    else if(str.length!=8){
        alert("password length must be only 8");  
        return false;
    }
    else if(!str[0].match(/[A-Z]/g)){
        
        alert("the first charcter in the password must be capital");
        return false;
    }

    else if(str.search(/[0-9]/)==-1){
        alert("Enter at least one digit in the password");
        return false;
    }
    else if(str.search(/ /)!=-1){
        alert("no spaces in password");
        return false;
    }
    else if(str.search(/&/)==-1 && str.search(/#/)==-1 && str.search(/[*]/)==-1 && str.search(/-/)==-1 && str.search(/_/)==-1){
        alert("passsword must have at least one special character");  
        return false;                        

    }
    else{
        return true;
    }
}
