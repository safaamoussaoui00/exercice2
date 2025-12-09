const produits=[
    { nom:"Pomme",prix:3},
    { nom:"Banane",prix:2},
    { nom: "Kiwi",prix:5},
    { nom: "Mangue",prix:8}
];
function Filtrerproduits(tableau,callback){
    const res=[];
    for(let i = 0;i<tableau.length;i++){
        if(callback(tableau[i])){
            res.push(tableau[i]);
        }
    }
return res;}
const prod=Filtrerproduits(produits,function(produit){
    return produit.prix<5;
});
console.log(prod);
 
prod.forEach(produit=>console.log(produit.nom+produit.prix));