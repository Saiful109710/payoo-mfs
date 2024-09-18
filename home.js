document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault();
    console.log("button is clicked")

    const addMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(addMoney,pinNumber)

})