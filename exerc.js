const prenoms=["ali","sara","mohamed","yassine"];
function capitalize(str){

return str[0].toUpperCase()+str.slice(1);

}
console.log(capitalize("casablanca"));

const maj= prenoms.map(capitalize);
console.log(maj);
maj.forEach(prenom=>console.log(prenom));

 