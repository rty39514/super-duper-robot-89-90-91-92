function addUser()
{
    player1_name = document.getElementById("player1_name_input").value
    player2_name = document.getElementById("player2_name_input").value

    localStorage.setItem("p1_name",player1_name)
    localStorage.setItem("p2_name",player2_name)
    window.location = "gamepage.html"
}
