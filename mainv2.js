//DATA
const imgArray = [
     {
        id: 'card-1',
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'paisaje uno',
        title: 'A Coruña',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
     {
        id: 'card-2',
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'paisaje dos',
        title: 'San Francisco',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
     {
        id: 'card-3',
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'paisaje tres',
        title: 'Seúl',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
     {
        id: 'card-4',
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'paisaje cuatro',
        title: 'Tokyo',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
     {
        id: 'card-5',
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'paisaje cinco',
        title: 'Berlín',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
     {
        id: 'card-6',
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'paisaje seis',
        title: 'Móstoles',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
     {
        id: 'card-7',
        src: 'assets/viajes/viajes-7.jpg',
        alt: 'paisaje siete',
        title: 'San Fernando de Henares',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    }
];
const bannerArray = [
    {
        src: 'assets/banner/1.jpg',
        alt: 'paisaje banner uno',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/2.jpg',
        alt: 'paisaje banner dos',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/3.jpg',
        alt: 'paisaje banner tres',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/4.jpg',
        alt: 'paisaje banner cuatro',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/5.jpg',
        alt: 'paisaje banner cinco',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/6.jpg',
        alt: 'paisaje banner seis',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/7.jpg',
        alt: 'paisaje banner siete',
        title: 'paisaje genérico banner'
    },
    {
        src: 'assets/banner/8.jpg',
        alt: 'paisaje banner ocho',
        title: 'paisaje genérico banner'
    }
];

const destinosArray = [{value: 'A Coruña'}, {value: 'San Francisco'}, {value: 'Seúl'}, {value: 'Tokyo'}, {value: 'Berlín'}, {value: 'Móstoles'}, {value: 'San Fernando de Henares'}];

//VARIABLES
const bienvenidosContainer = document.querySelector('.container-bienvenidos');
const recomendadosContainer = document.querySelector('.container-recomendados');
const detallesContainer = document.querySelector('.container-detalles');
const select = document.querySelector('select');
const fragment = document.createDocumentFragment();

//EVENTOS
document.addEventListener('click', ({target}) => {
    if (target.matches('div.container-recomendados button')) {
        console.log(target.id);
        let id = target.id;
        mostrarCards(id);
    }
});

//FUNCIONES
const mostrarCards = (id) => {

  const encontrado =  imgArray.find((element) => element.id === id);
  console.log(encontrado);

  if(encontrado){

    if (detallesContainer.innerHTML !== '') {
        detallesContainer.innerHTML = '';
    }

        
        const {alt,src,title}=encontrado;
        
        const infoCard = document.createElement('article');
        infoCard.classList.add('carta-detalle');
        
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        
        const cardImg = document.createElement('img');
        cardImg.src = src;
        cardImg.alt = alt;
        cardImg.title = title;
        
        const cardH3 = document.createElement('h3');
        cardH3.textContent = encontrado.title;
        
        const cardText = document.createElement('p');
        cardText.textContent = encontrado.texto;
        
        imageContainer.append(cardImg);
        infoCard.append(cardH3, imageContainer, cardText);
        fragment.append(infoCard);
        detallesContainer.append(fragment);
    
    }else{
        detallesContainer.innerHTML='<h2>No encontrado</h2>';
    }

   
}

function random(arr) {
    return Math.floor(Math.random() * arr.length);
}
//desestructuro cada objeto destino
const pintarOpciones = () => {
    destinosArray.forEach(({value}) => {
        const option = document.createElement('option'); //no llamar a la variable con etiqueta
        option.textContent = value;
        option.setAttribute('value', value);
        
        fragment.append(option);
    });
    select.append(fragment);
};

// const pintarOpciones = () => {
//     destinosArray.forEach((destino) => {
//         const option = document.createElement('option'); //no llamar a la variable con etiqueta
//         option.textContent = destino.value;
//         option.setAttribute('value', destino.value);
        
//         fragment.append(option);
//     });
//     select.append(fragment);
// };

const pintarBanner = () => {
    const banner = document.createElement('img');
    banner.classList.add('imagen-banner');

    const randomBanner = bannerArray[random(bannerArray)];
    banner.src = randomBanner.src;
    banner.alt = randomBanner.alt;
    banner.title = randomBanner.title;

    fragment.append(banner);
    bienvenidosContainer.append(fragment);
};

const pintarCards = () => {
    imgArray.forEach(({id, alt, src, texto, title}, index) => {
        const infoCard = document.createElement('article');
        infoCard.classList.add('cartas-destinos');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        const cardImg = document.createElement('img');
        cardImg.src = src;
        cardImg.alt = alt;
        cardImg.title = title;

        const cardH3 = document.createElement('h3');
        cardH3.textContent = destinosArray[index].value;

        const cardText = document.createElement('p');
        cardText.textContent = texto;

        const botonCard = document.createElement('button');
        botonCard.id = id;
        botonCard.textContent = `Detalles ${destinosArray[index].value}`;
        botonCard.classList.add('button');

        imageContainer.append(cardImg);
        infoCard.append(imageContainer, cardH3, cardText, botonCard);
        fragment.append(infoCard);
    })
    recomendadosContainer.append(fragment);
};


//INVOCACIÓN DE FUNCIONES
pintarOpciones();
pintarBanner();
pintarCards();