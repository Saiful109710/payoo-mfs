document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    console.log("button is clicks")

    const phoneNumber = document.getElementById("phone-number");
    const pinNumber = document.getElementById("pin-number");
    console.log(phoneNumber.value,pinNumber.value)

    if(phoneNumber.value==="01772900680" && pinNumber.value === "51419"){
        console.log("log in successfully");
        window.location.href = "home.html"
    }else{
        alert("user not found")
    }
})