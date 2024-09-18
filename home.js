document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault();
    console.log("button is clicked")

    const addMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(addMoney,pinNumber)

    if(pinNumber === "51419"){
        console.log("added money");
        const balance = document.getElementById("account-balance").innerText;
        const addNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const updateMoney = balanceNumber + addNumber;
        document.getElementById("account-balance").innerText = updateMoney;


        
    }else{
        console.log("wrong pin")
    }

})