// butonul go
let go = document.querySelector(".btn")

// pick the winners 
let no1 = document.querySelector(".no1")
let no2 = document.querySelector(".no2")
let no3 = document.querySelector(".no3")
let no4 = document.querySelector(".no4")
let no5 = document.querySelector(".no5")
let no6 = document.querySelector(".no6")


// extracted numbers 

let pick1 = document.querySelector(".pick1");
let pick2 = document.querySelector(".pick2");
let pick3 = document.querySelector(".pick3");
let pick4 = document.querySelector(".pick4");
let pick5 = document.querySelector(".pick5");
let pick6 = document.querySelector(".pick6");



go.addEventListener("click", () => {

    let container = document.querySelector(".results");
    let container2 = document.querySelector(".picked");
    let container3 = document.querySelector(".winners")
    if (no1.value !== "" && no2.value !== "" && no3.value !== "" && no4.value !== "" && no5.value !== "" && no6.value !== ""){

        // console.log(generateNumbers());
        generateNumbers();
        let x = generateNumbers();
        // let y = extractGeneratedNumbers(x);
        // console.log(y[0]);
        // console.log(y);
        // alert(x);
        // let x0 = x[0];

        // pick1.value = `${y[0]}`;
        // pick2.value = "0";
        // pick3.value = y[2];
        // pick4.value = y[3];
        // pick5.value = y[4];
        // pick6.value = y[5];
        container.innerHTML = createSections(x);
        

        let a = getNumbers();

        let f = compareResults(a,x);

        console.log(f);

        container2.innerHTML = createMyWinners(f);
        container3.classList.remove(".winners");
        // container3.classList.add(".winners-show");
        


    }else {
        alert(`Introduceti numere`)
    }

    

})