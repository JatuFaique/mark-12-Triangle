var side1 = document.querySelectorAll('.side-input')

var subbtn = document.querySelector('#submit-answer-btn')

var outputEL = document.querySelector('#output')


subbtn.addEventListener("click", calculateAre)
function calculateprod(a,b){
    const sideprod = a*b;
    //console.log(sumofSq)
    return sideprod;
}

function calculateAre(){
    sideprod = calculateprod(Number(side1[0].value),Number(side1[1].value));
    area = (sideprod)/2; 
    outputEL.innerHTML = "<h3>"+area+" cm2"+"</h3>"

}

