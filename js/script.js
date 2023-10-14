//Llamado de API
function callDatos (information) {
    const respuesta = fetch('https://api.thecatapi.com/v1/images/search?limit=10');

    respuesta
    .then( resInfo => resInfo.json())
    .then(datos => {
        information(datos)
    });    
}
callDatos( datos => {
    const limite = 4;
    let contador = 1
    datos.forEach(resInfo => {
        if (contador <= limite){
        const articleImg = document.createRange().createContextualFragment(/*con esta funcionalidad puedo agregar codigo html dentro de estos apostrofes `  */`
        <article class="article_img">
            <div class="contenedor_img">
                <img src="${resInfo.url}" alt="">
            </div>                
                <h2>${resInfo.origin}</h2>
        </article>
        `);
        const marco = document.querySelector(".marco");
        marco.appendChild(articleImg);
        contador++;
        }
        else {
            return;
        }
    });
});