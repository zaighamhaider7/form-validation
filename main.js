document.getElementById("login").addEventListener("click", () => {

    let emailpattern = /[a-zA-z\d]+@+[a-z]+.+[a-z]{2,3}/g

    let passwordpattern = /(?=.*[a-zA_Z])(?=.*[\d]){8,}/g

    let email = document.getElementById("form2Example1").value.match(emailpattern)

    let pass = document.getElementById("form2Example2").value.match(passwordpattern)

    if (email && pass) {
        window.location.href = "next.html"
        console.log("err");
    }
    else if(!email && pass) {
        document.getElementById("emailerror").innerHTML = "incorrect email"
        document.getElementById("passerror").innerHTML = ""
        document.getElementById("msg").innerHTML = ""
    }  
    else if(email && !pass) {
        document.getElementById("passerror").innerHTML = "incorrect pass"
        document.getElementById("emailerror").innerHTML = ""
        document.getElementById("msg").innerHTML = ""
    }  
    else if(document.getElementById("form2Example1").value=="" && document.getElementById("form2Example2").value==""){
        // document.getElementById("field").innerHTML=""
        document.getElementById("msg").innerHTML = ""
        document.getElementById("passerror").innerHTML = "please fill out this field"
        document.getElementById("emailerror").innerHTML = "please fill out this field"
    }
    else if(!email && !pass) {
        document.getElementById("msg").innerHTML = "incorrect Pass & Email"
        document.getElementById("passerror").innerHTML = ""
        document.getElementById("emailerror").innerHTML = ""
    }    
   
    else{
        alert("error")
    }
})


