
function quiz(){
  let cell =  document.getElementById('cell');
  let fourBillionYearsAgo = document.getElementById('4.6 billion years ago');
  let largeMolecule = document.getElementById('Large Molecule');
  let aminoAcid = document.getElementById('Amino Acid');
    let submitBtn = document.getElementById('submitBtn');
    let points = 0;
    let result = document.getElementById('result');
    
    function calculateScore(){
    
    if(cell.checked){
        points += 25;
    }

    if(largeMolecule.checked){
        points += 25;
    }

    if(aminoAcid.checked){
        points += 25;
    }

    if(largeMolecule.checked){
        points += 25;
    }

    let score = points;
    return result.innerHTML = `Your score: ${score}%`;

}


calculateScore();

}