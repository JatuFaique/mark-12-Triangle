var side1 = document.querySelectorAll('.side-input')

var subbtn = document.querySelector('#submit-answer-btn')

var outputEL = document.querySelector('#output')


subbtn.addEventListener("click", calculateHypo)
function calculateSumofSquare(a,b){
    const sumofSq = a*a+b*b;
    //console.log(sumofSq)
    return sumofSq;
}

function calculateHypo(){
    sq = calculateSumofSquare(Number(side1[0].value),Number(side1[1].value));
    sqrt = Math.sqrt(sq);
    //console.log(sqrt);
    outputEL.innerHTML = "<h3>"+"The length of hypotenuse is "+Math.round(sqrt)+"</h3>"

}

