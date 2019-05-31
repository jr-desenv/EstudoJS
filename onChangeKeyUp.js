function convertText(){
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
}

function testPass(){
    var pass = document.getElementById("pass").value;
    
    if(pass == "" || pass.length <= 5){
        document.getElementById("passError").innerHTML = "<b><span style='color:red'>minimum caracters 5</b></span>";
    } else{
        document.getElementById("passError").innerHTML = "<b><span style='color:green'>Valid pass!</b></span>";
    }
}