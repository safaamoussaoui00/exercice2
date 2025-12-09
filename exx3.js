
const notes = [12, 8, 15, 17, 9, 14, 19];


function moyenne(tab) {
  const sumnotes = tab.reduce(function(acc, note) {
    return acc + note; 
  }, 0);
  return sumnotes / tab.length;
}
 console.log(moyenne(notes));


const notesValides = notes.filter(function(note) {
  return note >= 10;
});
console.log(notesValides);

const afficherNotesEtMoyenne = () => {
  const valides = notes.filter(n => n >= 10);
  const moyenne = valides.reduce((acc, n) => acc + n, 0) / valides.length;
  console.log(`Notes valides : ${valides.join("- ")}`);
  console.log(`Moyenne des notes valides : ${moyenne}`);
};


afficherNotesEtMoyenne();