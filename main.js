
function addUser() {
    player1_name = document.getElementById("num1").value;
    player2_name = document.getElementById("num2").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "index.html";
}
function send() {
	number1 = document.getElementById("num1").value;
	number2 = document.getElementById("num2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("num1").value = "";
	document.getElementById("num2").value = "";
}


question_turn = "player1";
answer_turn = "player2";
