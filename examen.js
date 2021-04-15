
document.querySelector("#btnMostrar").addEventListener('click',function name(params) {
    let cita= {
        quoteText: "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom. ",
        quoteAuthor: "Marcel Proust",
        senderName: "",
        senderLink: "",
        quoteLink: "http://forismatic.com/en/3fe08c5b2e/"
      }
            let objet= JSON.stringify(cita);
            let objeto = JSON.parse(objet)

            let tabla = document.querySelector("#mostrar");
            let contenedor = document.createElement("div");
        contenedor.classList.add("prediccion");
        contenedor.innerHTML=`
        <span>${objeto.quoteText}</span>
        <br>
        <span>${objeto.quoteAuthor}</span>
        <br>
        <span>${objeto.senderName}</span>
        <span >${objeto.senderLink}</span>
        <span>${objeto.quoteLink}</span>
        `;
        tabla.appendChild(contenedor);
      

    
});





