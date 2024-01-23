document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide' , {
      with: '100%' , 
      height: '320px',
      start: 0, 
      // demarrer le slide à l'image voulu zéro étant l'image 1
      perPage: 1, 
      // nombre d'image par slide
      gap: '10px', 
      // permet de mettre un espace entre les images si plusieurs sur le meme slide
      focus: 'center', 
      type:'fade',
      snap: true, 
      // permet de mettre le slide en infini
      autoplay: true,
      // permet de lire les slide sans cliquer
      interval: 2000,
      // durée entre chaque slide compte en milliseconde donc 1000 = 1 sec
      speed: 1000,
      // temps de transition 
      rewind: true,
      // permet de rembobinner le slide
    });
    splide.mount();
  } );