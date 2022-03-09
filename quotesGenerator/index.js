let btn = document.getElementById('btn');
let citation = document.getElementById('citation');
let quotes =
 ['"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty" _WINSTON CHURCHILL',
 '"Knowing is not enough; we must apply. Wishing is not enough; we must do" _JOHANN VON GOETHE',
 '"Ce qu\'il y a de plus difficile à changer, c\'est la perception que les gens ont en nous" _DIENG PAPE YIGO',
 '"Faites gaffe, ce n\'est pas le bon partenaire si ses goûts sont coûteux et sûrement au-dessus de vos moyens alors que vous, vous êtes en train de vous chercher" _DIENG PAPE YIGO',
 '"Elle est très fêtarde, elle investit dans la forme et non dans le fond. Elle mise tout sur l\'extérieur car elle est vide de l\'intérieur, alors elle est du genre \"femme superficielle\"" _DIENG PAPE YIGO',
 '"Pour chaque raison de mentir, il en existe une meilleure pour dire la vérité; même si le mensonge est souvent un moyen échapatoire, il n\'a jamais rien apporté de bon" _DIENG PAPE YIGO',
 '"Beaucoup de gens veulent améliorer leurs conditions mais il n\' y a pas beaucoup qui sont prêts à faire les sacrifices pour y arriver" _DIENG PAPE YIGO',
 '"You learn more from failure than from succes. Don\'t let it stop you. Failure build character" _UNKNOWN'

];
btn.addEventListener('click',function(){
    let randomQuote = quotes[Math.floor(Math.random() *quotes.length)]
    citation.innerHTML = randomQuote;
})