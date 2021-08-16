var side1 = document.querySelectorAll('.side-input')

var subbtn = document.querySelector('#submit-btn')

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
    outputEL.innerHTML = "<h1>"+area+"</h1>"

}

