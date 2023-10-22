async function buscarPet(id) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) ;//hago mi solicitud a la web que tiene la api       
    return await respuesta.json(); // el resultado dentro de la funcoin la manejo y la convierto en json
}

async function buscarLasPets() { //le coloco async para indicar que tendre await dentro, como quien dice para que espere que se ejecute lo que esta dentro
    const limite = 9;              //es decir para que espere la promesa (que seria una respuesta obligatoria)
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

async function buscarUsert(id) {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}/`) ;//hago mi solicitud a la web que tiene la api       
    return await respuesta.json(); // el resultado dentro de la funcoin la manejo y la convierto en json
}

async function buscarLasPersonas() { //le coloco async para indicar que tendre await dentro, como quien dice para que espere que se ejecute lo que esta dentro
    const limite = 173;              //es decir para que espere la promesa (que seria una respuesta obligatoria)
    const marcos = document.getElementById('apis')

    for (let i =170; i <= limite; i++) {
        const datos = await buscarUsert(i);
        const articleImg = document.createRange().createContextualFragment(`
        <div class="card" style="width: 18rem;">
                <img src="${datos.image}"  class="card-img-top rounded-circle" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${datos.name}</h5>
                    <p class="card-text text-center">Especie: ${datos.species} </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-center">Genero: ${datos.gender} </li>
            </ul>
            <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item ">
                    <a class="nav-link text-decoration-none" href="#"><i class="bi bi-instagram btn-lg"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-decoration-none" href="#"><i class="bi bi-telegram btn-lg"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-decoration-none" href="#"><i class="bi bi-twitter btn-lg"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-decoration-none" href="#"><i class="bi bi-whatsapp btn-lg"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-decoration-none" href="#"><i class="bi bi-github btn-lg"></i></i></a>
                </li>
            </ul>
        </div>
        `);
        marcos.appendChild(articleImg);
    }
}

buscarLasPersonas();
