p1_name = localStorage.getItem("p1_name");
p2_name = localStorage.getItem("p2_name");

p1_score = 0;
p2_score = 0;
answer_turn = "p2";
question_turn = "p1";

document.getElementById("p1_name").innerHTML = p1_name + " : " ;
document.getElementById("p2_name").innerHTML = p2_name + " : " ;

document.getElementById("p1_score").innerHTML = p1_score ;
document.getElementById("p2_score").innerHTML = p2_score ;

document.getElementById("player_question").innerHTML = "Question turn - " + p1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + p2_name ;

function send()
{
    n1 = document.getElementById("num1").value ;
    n2 = document.getElementById("num2").value ;
    mul = n1*n2

    question_word = "<h4 id = 'word_display'> Q. "+n1+"x"+n2+"</h4>" ; 
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>" ; 
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>" ;
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row ; 
    document.getElementById("word").value = "";
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == mul)
    {
        if(answer_turn == "p1")
        {
            p1_score = p1_score + 1 ;
            document.getElementById("p1_score").innerHTML = p1_score ;
        }

        else
        {
            p2_score = p2_score + 1 ;
            document.getElementById("p2_score").innerHTML = p2_score ;
        }
    }

    if(question_turn == "p1")
    {
        question_turn = "p2"
        answer_turn = "p1"
        document.getElementById("player_question").innerHTML = "Question turn - " + p2_name ;
        document.getElementById("player_answer").innerHTML = "Answer turn - " + p1_name ;
    }
    else
    {
        question_turn = "p1"
        answer_turn = "p2"
        document.getElementById("player_question").innerHTML = "Question turn - " + p1_name ;
        document.getElementById("player_answer").innerHTML = "Answer turn - " + p2_name ;
    }
}