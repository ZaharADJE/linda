const playerOne= document.getElementById('playerOne');
const playerTowe= document.getElementById('playerTowe');
const BoutonLancer=document.getElementById('boutonLancer');
const image= document.getElementById('image_dé');
const ScoreOne= document.getElementById('ScoreOne');
const ScoreTowe= document.getElementById('ScoreTowe');



function lancerDe(){
const playerOne= document.getElementById('playerOne');
const playerTowe= document.getElementById('playerTowe');
const BoutonLancer=document.getElementById('boutonLancer');
const image= document.getElementById('image_dé');
const ScoreOne= document.getElementById('ScoreOne');
const ScoreTowe= document.getElementById('ScoreTowe');



function lancerDe(){
    const nombreDecimal=(Math.random()*6)+1;
    const nombre= Math.floor(nombreDecimal);
    const nombre= Math.floor(nombreDecimal);
    return nombre;
}
const deTexte = {
    '1': 'Un',
    '2': 'Deux',
    '3': 'Trois',
    '4': 'Quatre',
    '5': 'Cinq',
    '6': 'Six',
}
console.log(deTexte['1']);
console.log(deTexte['2']);
console.log(deTexte['3']);
console.log(deTexte['4']);
console.log(deTexte['5']);
console.log(deTexte['6']);
console.log(deTexte['1']);
console.log(deTexte['2']);
console.log(deTexte['3']);
console.log(deTexte['4']);
console.log(deTexte['5']);
console.log(deTexte['6']);
const resultat= lancerDe();
console.log(resultat+'('+deTexte[resultat]+')');

function clickSurBouton(){
    const resultat=lancerDe();
    image.src='image/Dé de '+resultat+'.png';
} 
BoutonLancer.addEventListener('click', e =>{

 if (playerOne.value === "" || playerTowe.value === ""){
    alert("il y a pas le nom de player")
 }else{
    clickSurBouton();
 }


});
