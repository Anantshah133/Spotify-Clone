function checkMail(email){
    var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let alert = document.getElementById("mailError");
    console.log(email.value)
    if(!email.value.match(pat)){
        alert.style.display = "block"
        email.style.boxShadow = "inset 0 0 0 1px var(--essential-negative,#e91429)";
    } else {
        email.style.boxShadow = "inset 0 0 0 1px var(--essential-subdued,#878787)";
        alert.style.display = "none"
    }
}

function checkPass(pass){
    let alert = document.getElementById("passError");
    if(pass.value === ""){
        alert.style.display = "block"
        pass.style.boxShadow = "inset 0 0 0 1px var(--essential-negative,#e91429)";
    } else {
        pass.style.boxShadow = "inset 0 0 0 1px var(--essential-subdued,#878787)";
        alert.style.display = "none"
    }
}

function checkName(pass){
    let alert = document.getElementById("nameError");
    userDsc = document.querySelector(".user-dsc");
    if(pass.value === ""){
        userDsc.style.display = "none";
        alert.style.display = "block"
        pass.style.boxShadow = "inset 0 0 0 1px var(--essential-negative,#e91429)";
    } else {
        userDsc.style.display = "block";
        pass.style.boxShadow = "inset 0 0 0 1px var(--essential-subdued,#878787)";
        alert.style.display = "none"
    }
}

function checkYear(year){
    let alert = document.getElementById("yearError");
    if(year.value === "" || year.value > new Date().getFullYear() || year.value < 1900 ){
        alert.style.display = "block"
        year.style.boxShadow = "inset 0 0 0 1px var(--essential-negative,#e91429)";
    } else {
        year.style.boxShadow = "inset 0 0 0 1px var(--essential-subdued,#878787)";
        alert.style.display = "none"
    }
}


function checkMonth(month){
    let alert = document.getElementById("monthError");
    if(month.value === ""){
        alert.style.display = "block"
        month.style.boxShadow = "inset 0 0 0 1px var(--essential-negative,#e91429)";
    } else {
        month.style.boxShadow = "inset 0 0 0 1px var(--essential-subdued,#878787)";
        alert.style.display = "none"
    }
}

function checkDay(day){
    let alert = document.getElementById("dayError");
    if(day.value === ""){
        alert.style.display = "block"
        day.style.boxShadow = "inset 0 0 0 1px var(--essential-negative,#e91429)";
    } else {
        day.style.boxShadow = "inset 0 0 0 1px var(--essential-subdued,#878787)";
        alert.style.display = "none"
    }
}


// ------------------------ taking user details (sign-up code) ------------------------
function takeUserDetails(event) {
    event.preventDefault();
    let toastContent = document.getElementById("desc");
    let toastIcon = document.getElementById("t-icon").querySelector("i")
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    var name = document.getElementById("name").value
    var existingUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
    
    var existingEmail = existingUserDetails.some((user) => {
        return user.emailId == email
    });

    if(existingEmail){
        toastIcon.classList.remove("fa-check")
        toastIcon.classList.add("fa-xmark")
        toastContent.innerText = "This Email-Id Already Exists !!";
        document.getElementById("toast").style.backgroundColor = "#d31225";
        toastContent.style.color = "#ffffff";
        toastIcon.parentElement.style.backgroundColor = "#9d0716";
        launchToast();
        return;
    }

    var userDetails = {
        emailId: email,
        password: pass,
        name: name, 
    };

    existingUserDetails.push(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(existingUserDetails));

    toastIcon.classList.remove("fa-xmark")
    toastIcon.classList.add("fa-check")
    toastContent.innerText = "You Are SuccessFully Registered...";
    document.getElementById("toast").style.backgroundColor = "#1ed760";
    toastContent.style.color = "#000000";
    toastIcon.parentElement.style.backgroundColor = "#0e8237";
    launchToast(() => {
        window.location.href = "login.html";
    });
}

function launchToast(callback){
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", ""); 
        if (typeof callback === 'function') {
            callback();
        }
    }, 5000);
}

//     launchToast();
//     window.location.href = "login.html";
// }


// function launchToast(){
//     var x = document.getElementById("toast")
//     x.className = "show";
//     setTimeout(() => {
//         x.className = x.className.replace("show", ""); 
//     }, 5000);
// }