// Create function addUser()
function adduser() 
{
  // Get value of user by id player1_name_input and player2_name_input

  // Store these values locally

  //Assign "game_page.html" to window.location
  player1name = document.getElementById("player1_name_input").value 
  player2name = document.getElementById("player2_name_input").value
  localStorage.setItem("player1_name_input" ,player1name)
  localStorage.setItem("player2-name_input" ,player2name)
  window.location = "game_page.html"
}

