function createSections (arr) {
    let text = `
        <h2>Extracted numbers</h2>
        <div class="picked">
        <input type="text" class="pick1" value="${arr[0]}">
        <input type="text" class="pick2" value="${arr[1]}">
        <input type="text" class="pick3" value="${arr[2]}">
        <input type="text" class="pick4" value="${arr[3]}">
        <input type="text" class="pick5" value="${arr[4]}">
        <input type="text" class="pick6" value="${arr[5]}">
        </div>
    `
    return text;
}


function createMyWinners (arr) {
    
    let text = ``;
        
    for (i=0;i<arr.length;i++) {
    text += `<input type="text" value="${arr[i]}">`
    }
    return text;
}


function getNumbers () {

    let luckyNumbers = [];

    // let x = 0
    // let aux = 0;

    let a = +no1.value;
    let b = +no2.value;
    let c = +no3.value;
    let d = +no4.value;
    let e = +no5.value;
    let f = +no6.value;

    luckyNumbers = [
        +no1.value,
        +no2.value,
        +no3.value,
        +no4.value,
        +no5.value,
        +no6.value
    ];
    if (a!==b && b!==c && c!==d && d!==e && e!==f) {
        
        for (i = 0 ; i < luckyNumbers.length; i++) {
            if (0 < luckyNumbers[i] && luckyNumbers[i] < 50) {
                return luckyNumbers;
            } else {
                alert(`numerele introduse depasesc intervalul de valori`)
            }
        }

    }else {
        alert (`numerele introduse se repeta`)
    }

}


// to do functie ce genereaza 6 numere distincte intre unu si 49

function generateNumbers (){

    let generated = [];
    
    while(generated.length<6){
        x = Math.floor(Math.random()*49+1);
        if(generated.includes(x)==false){
            generated.push(x);
        }
    }
    return generated;



}


// ordonare crescatoare

function sortAscending (arr) {
    for (let i = 0; i<arr.length; i++){

        for (let j = i+1; j<arr.length;j++){

            if(arr[i]>arr[j]){

                let aux = arr[i];
                arr[i] = arr[j];
                arr[j]= aux;

            }

        }

    }


}



function extractGeneratedNumbers (arr) {

    let x = [];

for (i=0;i<arr.length;i++) {
    x.push(arr[i]);
}

return x;

}

function compareResults (arr1,arr2) {

    let x = [];

    for(i=0;i<arr1.length;i++) {
        if(arr2.includes(arr1[i])==true) {

            x.push(arr1[i]);
        }
    }
    return x;
}
