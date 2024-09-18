document.getElementById("cash-out-money-btn").addEventListener("click",function(event){
    event.preventDefault();
    console.log("btn is click");
    const cashOutMoney = document.getElementById("input-cash-out-money").value;
    const pinNumber = document.getElementById("input-cash-out-pin-number").value;
    console.log(cashOutMoney,pinNumber)
    if(pinNumber==="51419"){
        const balance = document.getElementById("account-balance").innerText;
        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOutMoney);
        const updateMoney = balanceNumber - cashOutNumber;
        document.getElementById("account-balance").innerText = updateMoney;
       
   

    }else{
        alert("wrong pin number")
    }
})