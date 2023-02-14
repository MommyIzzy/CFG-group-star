function message(){
    var Name=document.getElementById("name");
    var PhoneNumber=document.getElementById("phone");
    var Email=document.getElementById("email");
    var Message=document.getElementById("msg");
    var Success=document.getElementById("success");
    var Danger=document.getElementById("danger")

if (Name.value === '' || Email.value ===''|| PhoneNumber.value ===''){
    Danger.style.display='block'
}
else{
    setTimeout(()=>{
        Name.value='';
        PhoneNumber.value='';
        Message.value='';
        Email.value='';
    }, 2000);
    Success.style.display ='block'
}

setTimeout(()=>{
Danger.style.display='none'
Success.style.display='none'

}, 4000)

}