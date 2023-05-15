let sportsOne: string[] = ["Golf","Cricket","Tennis","Swimming"]; 

// for (let i=0;i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }
// console.log("");
// console.log("Here is the simplified loop : ");
// // let's use the simplied for loop


for (let tempSport of sportsOne){
if(tempSport=="Cricket"){
    console.log (tempSport+" <<My favorite one!");
}else{
    console.log(tempSport);
}
}
