import Chance from "chance"

const chance = Chance();
export  const fakeUserData=()=>{
    let x =chance.name({middle:true});
    return x;
}

// fakeUserData();