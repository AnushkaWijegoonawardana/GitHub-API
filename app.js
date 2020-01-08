//1. Search Input
const searchUserInput = document.getElementById("searchUsers");

//2. Search Input Event Listner
searchUserInput.addEventListener("keyup", e => {
  // 2.1 Get The Input Value
  const userInputText = e.target.value;

  if (userInputText !== "") {
    console.log(userInputText);
  }
});
