// signup Form validation

const form = document.querySelector("form");
username = form.querySelector(".username"),
userInput = username.querySelector("input"),
email = form.querySelector(".email"),
eInput = email.querySelector("input"),
phone = form.querySelector(".phone"),
phInput = phone.querySelector("input"),
password = form.querySelector(".password"),
pInput = password.querySelector("input");
password2 = form.querySelector(".password2"),
p2Input = password2.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (userInput.value == "") ? username.classList.add( "error") : checkUser();
  (eInput.value == "") ? email.classList.add( "error") : checkEmail();
  (phInput.value == "") ? phone.classList.add( "error") : checkPhone();
  (pInput.value == "") ? password.classList.add( "error") : checkPass();
  (p2Input.value == "") ? password2.classList.add( "error") : checkPass2();

// calling functions

  userInput.onkeyup = ()=>{checkUser();}
  eInput.onkeyup = ()=>{checkEmail();} 
  phInput.onkeyup = ()=>{checkPhone();} 
  pInput.onkeyup = ()=>{checkPass();} 
  p2Input.onkeyup = ()=>{checkPass2();}

  function checkUser(){ 
      if(userInput.value.trim() == ""){ 
        username.classList.add("error");
        username.classList.remove("valid");
      }else if(userInput.value.length<3){
        username.classList.add("error");
        username.classList.remove("valid");
        let errorTxt = username.querySelector(".error-txt");
        (userInput.value !="")?errorTxt.innerText = "Username contain minimum 3 characters" : errorTxt.innerText = "Username can't be blank";
      }
      else{ 
        username.classList.remove("error");
        username.classList.add("valid");
      }
    }

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      email.classList.add("error");
      email.classList.remove("valid");
      let errorTxt = email.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ 
        email.classList.remove("error");
        email.classList.add("valid");
    }
  }

  function checkPhone(){ 
    let pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(!phInput.value.match(pattern)){ 
      phone.classList.add("error");
      phone.classList.remove("valid");
      let errorTxt = phone.querySelector(".error-txt");
      (phInput.value != "") ? errorTxt.innerText = "Enter a valid phone number" : errorTxt.innerText = "Phone number can't be blank";
    }else{ 
      phone.classList.remove("error");
      phone.classList.add("valid");
    }
  }

  function checkPass(){ 
    let pattern =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?!.*\s).{8,}$/; 
    if(!pInput.value.match(pattern)){ 
        password.classList.add("error");
        password.classList.remove("valid");
      let errorTxt = password.querySelector(".error-txt");
      (pInput.value != "") ? errorTxt.innerText = "Enter a valid password" : errorTxt.innerText = "password can't be blank";
    }else{
        password.classList.remove("error");
        password.classList.add("valid");
    }
  }

  function checkPass2(){
    
    if(p2Input.value != pInput.value){ 
        password2.classList.add("error");
        password2.classList.remove("valid");
      let errorTxt = password2.querySelector(".error-txt");
      (p2Input.value !=  pInput.value) ? errorTxt.innerText = "password doesnt match" : errorTxt.innerText = "password can't be blank"; ;
    }else{ 
        password2.classList.remove("error");
        password2.classList.add("valid");
    }
  }
  
  if(!password.classList.contains("error") && !email.classList.contains("error") && !password.classList.contains("error") && !phone.classList.contains("error")&& !password2.classList.contains("error")){
      window.alert("validation successful");
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}


 // PASSWORD STRENGTH CHECKER

 function getPasswordStrength(password){
  let s = 0;
  if(password.length > 6){
  s++;
  }
  if(password.length >= 8){
  s++;
  }
  if(/[A-Z]/.test(password)){
  s++;
  }
  if(/[0-9]/.test(password)){
  s++;
  }
  if(/[^A-Za-z0-9]/.test(password)){
  s++;
  }
  return s;
  }
  document.querySelector(".wrapper #password").addEventListener("focus",function(){
  document.querySelector(".wrapper .pw-strength").style.display = "block";
  });
  
  
  document.querySelector(".wrapper #password").addEventListener("keyup",function(e){
  let password = e.target.value;
  let strength = getPasswordStrength(password);
  let passwordStrengthSpans = document.querySelectorAll(".wrapper .pw-strength span");
  strength = Math.max(strength,1);
  passwordStrengthSpans[1].style.width = strength*20 + "%";
  if(strength < 2){
  passwordStrengthSpans[0].innerText = "Weak";
  passwordStrengthSpans[0].style.color = "#fff";
  passwordStrengthSpans[1].style.background = "rgb(240, 11, 11)";
  } else if(strength >= 2 && strength <= 4){
  passwordStrengthSpans[0].innerText = "Medium";
  passwordStrengthSpans[0].style.color = "#fff";
  passwordStrengthSpans[1].style.background = "rgb(250, 162, 0)";
  } else {
  passwordStrengthSpans[0].innerText = "Strong";
  passwordStrengthSpans[0].style.color = "#fff";
  passwordStrengthSpans[1].style.background = "#20a820";
  }
  });

  