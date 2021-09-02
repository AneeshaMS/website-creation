// Login form validation

const form = document.querySelector("form");
email = form.querySelector(".email"),
eInput = email.querySelector("input"),
password = form.querySelector(".password"),
pInput = password.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 
  (eInput.value == "") ? email.classList.add("error") : checkEmail();
  (pInput.value == "") ? password.classList.add("error") : checkPass();

  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{checkPass();}

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      email.classList.add("error");
      email.classList.remove("valid");
      let errorTxt =  email.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ 
      email.classList.remove("error");
      email.classList.add("valid");
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
  if(!email.classList.contains("error") && !password.classList.contains("error")){
    window.location.href = form.getAttribute("action"); 
  }
}

