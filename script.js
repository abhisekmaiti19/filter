// Data Store
const users = [
    {id:1, name:"john", profession:"developer", age:"18"},
    {id:2, name:"jack", profession:"developer", age:"20"},
    {id:3, name:"karen", profession:"admin", age:"19"}
];

// Elements
let cardsContainer = document.getElementById("cardAll");
let nameInputField = document.getElementById("name");
let profInputField = document.getElementById("prof");
let ageInputField = document.getElementById("age");

const addElem = ()=>{ 
    let newID = (users.length+1);
    let userName = nameInputField.value;
    let profession = profInputField.value;
    let age = ageInputField.value;

    if(validate(userName) && validate(profession) && validate(age, "age")) {
        let newUser = {
            id:newID,
            name: userName,
            profession: profession,
            age: age
        };
    
        return newUser;
    }
    alert("Enter valid details");
    return null;
    
}

const validate = (item, type = "name")=> {
    switch (type){
        case "prof":
        case "name":
            if (item.trim() === "") return false;
            break;

        case "age":
            if (item.trim() === "") return false;
            if (item<1) return false;
    }
    return true;
}

const clicknclick = () => {
    
    let newUserElement = addElem();
    if(newUserElement) users.push(newUserElement);
    updateDOM();
}

const createNode = (user)=>{
    let customElm = document.createElement("div");
    customElm.className = "resultBox";

    let myDataArr = Object.keys(user);
    console.log(myDataArr);
    myDataArr.forEach((key) => {
        let h5Elm = document.createElement("h5");
        h5Elm.innerText = `${key.charAt(0).toUpperCase() + key.substring(1)}: ${user[key]}`;
        customElm.appendChild(h5Elm);
    });

    return customElm;
}

const updateDOM = (filter = "all") => {
    cardsContainer.innerHTML = "";

    updatedUsersList = filter=="all"?users:users.filter(user=>user.profession==filter);
    updatedUsersList.forEach(user =>{
        cardsContainer.appendChild(createNode(user));
    })
}

const filterItems = ()=>{
    let filter = document.querySelector("#select").value;
    updateDOM(filter);
}

updateDOM();

