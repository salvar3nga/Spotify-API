const header = document.querySelector("#tableHeader");
const stick = header.offsetTop;
const btnConfirm = document.querySelector("#confirm");

let nrInpt = document.querySelector("#number");
let coverInpt = document.querySelector("#cover")
let titleInpt = document.querySelector("#title")
let streamsInpt = document.querySelector("#streams")
let interpreterInpt = document.querySelector("#interpreter")
let table = document.querySelector("tbody");



window.onscroll = function (){
    fixHeader();
};


function fixHeader() {
    window.pageYOffset > stick ? header.classList.add("fixedPosition") : header.classList.remove("fixedPosition")
}


btnConfirm.addEventListener("click", ()=>{
    let nr = nrInpt.value;
    let cover = coverInpt.value;
    let title = titleInpt.value;
    let stream = streamsInpt.value;
    let int = interpreterInpt.value;

    let template = `
                <tr>
                    <td>${nr}</td>
                    <td><img src="${cover}"></td>
                    <td>${title}</td>
                    <td>${stream}</td>
                    <td>${int}</td>
                    <td><button>Details</button></td>
                </tr> `;

        table.innerHTML += template;       
});

