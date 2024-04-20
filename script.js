/* // přidání položky
localStorage.setItem("location", "České Budějovice")
localStorage.setItem("firstName", "Lucie")

//update položky
localStorage.setItem("location", "Praha")
localStorage.setItem("firstName", "Harry")

//získání položky
console.log(localStorage.getItem("location"));
console.log(localStorage.getItem("firstName"));

//smazání položky
localStorage.removeItem("location")
localStorage.removeItem("firstName") 

//smazání všeho v localeStorage
localStorage.clear() */

//?-----------------------------------------------------------

/* let user = {
    firstName:"Lucie",
    age:28
}
//Json je jakoby vrátnice
//do localStorage dáváme tak stringify
let userJSON = JSON.stringify(user)
localStorage.setItem("user", userJSON)


//když vytahujeme z local storage tak parse
let userFromLS = localStorage.getItem("user")
let myUser = JSON.parse(userFromLS)

console.log(`Ahoj já jsem ${myUser.firstName} a je mi ${myUser.age}.`); */

//?-------------------------------------------------------------
/* if (localStorage.getItem("users") == null) {
  var myArray = [];
} else {
  myArray = JSON.parse(localStorage.getItem("users"));
}


let myForm = document.querySelector("#test-form");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  myArray.push(e.target.elements.firstName.value);
  myArrayToLS = JSON.stringify(myArray);
  localStorage.setItem("users", myArrayToLS);

  e.target.elements.firstName.value = "";

  let myArrayFromLS = localStorage.getItem("users");
  let myArrayFromLSj = JSON.parse(myArrayFromLS);

  let paragraph = document.createElement("p");
  paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1];
  document.querySelector(".my-users").appendChild(paragraph);
});

let myPresentArray = localStorage.getItem("users");
let myPresentArrayJ = JSON.parse(myPresentArray);

if (myPresentArrayJ !== null) {
  myPresentArrayJ.forEach(function (oneUser) {
    let paragraph = document.createElement("p");
    paragraph.textContent = oneUser;
    document.querySelector(".my-users").appendChild(paragraph);
  });
} */

//?-------------------------------------------------
let myForm = document.querySelector("#test-form");

//pokud je localStorage prázdný, vytvoř mi toto pole
if (localStorage.getItem("criminals") == null) {
  var myArray = [];
}
//pokud už v localeStorage něco je, tak to vem a přes vrátnici a ulož do myArray
else {
  myArray = JSON.parse(localStorage.getItem("criminals"));
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  myArray.push({
    id: "",
    firstName: e.target.elements.firstName.value,
    secondName: e.target.elements.secondName.value,
    crime: e.target.elements.crime.value,
  });

  myArrayJSON = JSON.stringify(myArray);
  localStorage.setItem("criminals", myArrayJSON);
});

let toList = document.querySelector(".to-list");
toList.addEventListener("click", function () {
  let myStorage = localStorage.getItem("criminals");
  myStorageJSON = JSON.parse(myStorage);

  myStorageJSON.forEach(function (oneCriminal) {
    let paragraph = document.createElement("p");

    paragraph.innerHTML = `Jméno: ${oneCriminal.firstName},
    <br> Příjmení: ${oneCriminal.secondName} 
    <br> Zločin: ${oneCriminal.crime}`;

    document.querySelector("#list-criminals").appendChild(paragraph);
  });
});
