let data = document.querySelector("input")
let btn = document.querySelector("button")
let rasult = document.querySelector("h5")

btn.addEventListener('click',function (){

    if(data.value<=0 || data.value>=100){
        rasult.innerHTML ="404 Is Not Found"
    }
    else if (data.value>=80 && data.value <=100){
        rasult.innerHTML ="A+"
    }
    else if (data.value>=70 && data.value <=79){
        rasult.innerHTML ="A"
    }
    else if (data.value>=60 && data.value <=69){
        rasult.innerHTML ="A-"
    }
    else if (data.value>=50 && data.value <=59){
        rasult.innerHTML ="B"
    }
    else if (data.value>=40 && data.value <=49){
        rasult.innerHTML ="B-"
    }
    else if (data.value>=33 && data.value <=39){
        rasult.innerHTML ="C"
    }

    else {
        rasult.innerHTML="Faill"
    }

})