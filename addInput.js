document.getElementById("addInput").addEventListener("click", function(){
    var forminput=document.createElement("div");
    forminput.setAttribute("class","form-group");
    var userInput = document.getElementById("name").cloneNode(true);
    userInput.setAttribute("name", "user-control[]");
    var count=document.getElementById("user-control-count");
    var countIncrease=String(parseInt(count.value)+1);
    userInput.setAttribute("placeholder", "User Input "+countIncrease);
    count.setAttribute("value",countIncrease);
    userInput.setAttribute("id", "user-control"+countIncrease);
    forminput.append(userInput);
    document.getElementById("user-input").append(forminput);
});