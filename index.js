 

var submit=document.getElementById("button")
submit.addEventListener("click",(event)=>{
    event.preventDefault()
    var nameregex=/^[a-zA-Z]+$/
    var emailregex=/^[a-zA-Z0-9]+@gmail\.com$/
    var passwordregex=/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/

 var name=document.getElementById("name")
    var email=document.getElementById("email")
    var password=document.getElementById("password")

     if(!nameregex.test(name.value)){
            document.querySelector(".nameerror").style.display="block"
        }
        else{
            document.querySelector(".nameerror").style.display="none"
        }
      if(!emailregex.test(email.value)){
            document.querySelector(".gmailerror").style.display="block"
        }
        else{
            document.querySelector(".gmailerror").style.display="none"
        }
      if(!passwordregex.test(password.value)){
            document.querySelector(".passworderror").style.display="block"
        }
        else{
            document.querySelector(".passworderror").style.display="none"
        }
    
})

