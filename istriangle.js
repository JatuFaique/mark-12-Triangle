const inputs = document.querySelectorAll('.angle-input')
const triBtn = document.querySelector('#is-triangle-btn');
const outputEL = document.querySelector('#output')


triBtn.addEventListener('click', isTriangle)

function sumOfAngle(angle1,angle2,angle3){
    const sum = angle1+angle2+angle3;
    //console.log(sum)
    return sum;
}

function isTriangle() {
    const summation = sumOfAngle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    if (summation == 180){
        outputEL.innerHTML = "<h3>"+"Yayy it is a Triangle"+"</h3>";
    }
    else{
        outputEL.innerHTML = "<h3>"+"NO it is not a Triangle"+"</h3>";

    }
}

