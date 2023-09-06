var objUser=[
    {
        username:"hozaifa"  ,
        password:"hozaifa123"
    },
    {
        username:"tauqeer",
        password:"tauqeer123"
    },
]





function getInfo(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    for(i=0; i<objUser.length;i++){
    if(username == objUser[i].username && password == objUser[i].password){
        console.log(username + "    " +"User is Loged In")
        return
        
    }
    }
console.log("Incorect User Name Or Pasword");
}