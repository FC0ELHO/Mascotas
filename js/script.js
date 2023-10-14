async function buscarPet(id) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) ;//hago mi solicitud a la web que tiene la api       
    return await respuesta.json(); // el resultado dentro de la funcoin la manejo y la convierto en json
}

async function buscarLasPets() { //le coloco async para indicar que tendre await dentro, como quien dice para que espere que se ejecute lo que esta dentro
    const limite = 09;              //es decir para que espere la promesa (que seria una respuesta obligatoria)
    const marco = document.querySelector(".marco");

    for (let i = 6; i <= limite; i++) {
        const datos = await buscarPet(i);
        const articleImg = document.createRange().createContextualFragment(`
            <article class="article_img">
                <div class="contenedor_img">
                    <img src="${datos.sprites.front_default}" alt="">
                </div>
                <h2>${datos.name}</h2>
            </article>
        `);
        marco.appendChild(articleImg);
    }
}

buscarLasPets();
