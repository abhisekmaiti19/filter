let myelm = document.getElementById("cardAll");
let mname = document.getElementById("name");
let prof = document.getElementById("prof");
let mage = document.getElementById("age");
let user = [{id:1,name:"john",profession:"developer",age:"18"},{id:2, name:"jack", profession:"developer",age:"20"},{id:3, name:"karen",profession:"admin", age:"19"}];
// user.push({id:4,name:"john",profession:"developer",age:"18"})

function addElem(){ 

      
    
        let latestLenght = user.length+1;
        let myid = latestLenght;
        let dataObj = {

        id:myid,
        name: mname.value,
        profession: prof.value,
        age: mage.value

    };        


    return dataObj;
   
            
        
}

function clicknclick(){
    let datadata = addElem();
    user.push(datadata);
    perfrom(datadata);
}


function perfrom(myobj)
{
    let customElm = document.createElement("div");
    customElm.className = "resultBox";
    function myObjFun(data){
        let h5Elm = document.createElement("h5");
        h5Elm.innerText = data;
        customElm.append(h5Elm);
    }

    let myDataArr = Object.keys(myobj);
    for(let i = 0; i<4; i++)
    {
        if(i == 0){
            myObjFun(`${myobj[myDataArr[i]]}.`);
        }

        if(i == 1){
            myObjFun(`Name: ${myobj[myDataArr[i]]}`);
        }

        if(i == 2){
            myObjFun(`Profession: ${myobj[myDataArr[i]]}`);
        }

        if(i == 3){
            myObjFun(`Age: ${myobj[myDataArr[i]]}`);
        }
        
    }
    
    myelm.append(customElm);
}

for(let i = 0; i<user.length; i++){

    perfrom(user[i]);
}


// filtering

function filterresult(){
    let dropValue = document.getElementById("opt");
    if(dropValue.value === "admin"){

        for(let i = 0; i<user.length; i++){
            if(user[i].profession === "admin")
            {
                perfrom(user[i]);
            }
            
        }

    } else if (dropValue.value === "developer"){

        for(let j = 0; j<user.length; j++){
            if(user[i].profession === "developer")
            {
                perfrom(user[i]);
            }
            
        }

    }else{

        for(let j = 0; j<user.length; j++){

                perfrom(user[i]);
            
            
        }

        
    }
}












