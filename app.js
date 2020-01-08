// 3. Init GitHub
const github = new GitHub();
// 4. Init UI
const ui = new UI();

//1. Search Input
const searchUserInput = document.getElementById("searchUsers");

//2. Search Input Event Listner
searchUserInput.addEventListener("keyup", e => {
  // 2.1 Get The Input Value
  const userInputText = e.target.value;

  if (userInputText !== "") {
    github.getUser(userInputText).then(userData => {
      if (userData.userProfileData.message === "Not Found") {
        //Show Alert
        console.log("No User Found");
      } else {
        // console.log(userData);
        //Show Profile
        ui.showProfile(userData.userProfileData);
      }
    });
  } else {
    console.log("Profile Cleard");
    //Clear Pofile
  }
});
