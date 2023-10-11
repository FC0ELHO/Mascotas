document.addEventListener ('DOMContentLoaded', function ()  {
    //debugger;
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos?userId=1')
      .then(response => response.json())
      .then(json => {
        const elementoDaniela = document.querySelector('footer ul li:first-child');

        //agrego los valores que quiero
        const title = json.title;
        const url = json.url;
        const thumbnailUrl = json.thumbnailUrl;
        


        //elementoDaniela.innerHTML += ' - ' + JSON.stringify(json);-- con esto se que e slo que me trae el json
        elementoDaniela.innerHTML += ' - Titulo: ' + title + ', imagen: ' + url + ', thumbnailUrl: ' + thumbnailUrl;
      });    
});