//DATA
const imgArray = [
    destino1 = {
        src: 'assets/viajes/viajes-1.jpg',
        alt: 'paisaje uno',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
    destino2 = {
        src: 'assets/viajes/viajes-2.jpg',
        alt: 'paisaje dos',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
    destino3 = {
        src: 'assets/viajes/viajes-3.jpg',
        alt: 'paisaje tres',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
    destino4 = {
        src: 'assets/viajes/viajes-4.jpg',
        alt: 'paisaje cuatro',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
    destino5 = {
        src: 'assets/viajes/viajes-5.jpg',
        alt: 'paisaje cinco',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
    destino6 = {
        src: 'assets/viajes/viajes-6.jpg',
        alt: 'paisaje seis',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    },
    destino7 = {
        src: 'assets/viajes/viajes-7.jpg',
        alt: 'paisaje siete',
        title: 'paisaje genérico',
        texto: 'Suspendisse mollis mi ac dui iaculis euismod. Cras neque ipsum, tristique sit amet orci eget, porttitor scelerisque dui. Integer iaculis fermentum nunc at ultricies.'
    }
];
const bannerArray = [
    banner1 = {
        src: 'assets/banner/1.jpg',
        alt: 'paisaje banner uno',
        title: 'paisaje genérico banner'
    },
    banner2 = {
        src: 'assets/banner/2.jpg',
        alt: 'paisaje banner dos',
        title: 'paisaje genérico banner'
    },
    banner3 = {
        src: 'assets/banner/3.jpg',
        alt: 'paisaje banner tres',
        title: 'paisaje genérico banner'
    },
    banner4 = {
        src: 'assets/banner/4.jpg',
        alt: 'paisaje banner cuatro',
        title: 'paisaje genérico banner'
    },
    banner5 = {
        src: 'assets/banner/5.jpg',
        alt: 'paisaje banner cinco',
        title: 'paisaje genérico banner'
    },
    banner6 = {
        src: 'assets/banner/6.jpg',
        alt: 'paisaje banner seis',
        title: 'paisaje genérico banner'
    },
    banner7 = {
        src: 'assets/banner/7.jpg',
        alt: 'paisaje banner siete',
        title: 'paisaje genérico banner'
    },
    banner8 = {
        src: 'assets/banner/8.jpg',
        alt: 'paisaje banner ocho',
        title: 'paisaje genérico banner'
    }
];

const destinosArray = [{value: 'A Coruña'}, {value: 'San Francisco'}, {value: 'Seúl'}, {value: 'Tokyo'}, {value: 'Berlín'}, {value: 'Móstoles'}, {value: 'San Fernando de Henares'}];

//VARIABLES
const bienvenidosContainer = document.querySelector('.container-bienvenidos');
const recomendadosContainer = document.querySelector('.container-recomendados');
const select = document.querySelector('select');
const fragment = document.createDocumentFragment();

//FUNCIONES
const pintarOpciones = () => {
    destinosArray.forEach((destino) => {
        const option = document.createElement('option');
        option.textContent = destino.value;
        option.setAttribute('value', `${destino.value}`);
        
        fragment.append(option);
    });
    select.append(fragment);
};

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
    imgArray.forEach((card, index) => {
        const infoCard = document.createElement('div');
        infoCard.classList.add('cartas-destinos');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        infoCard.append(imageContainer);

        const cardImg = document.createElement('img');
        cardImg.src = card.src;
        cardImg.alt = card.alt;
        cardImg.title = card.title;
        imageContainer.append(cardImg);

        const cardH3 = document.createElement('h3');
        cardH3.textContent = destinosArray[index].value;
        infoCard.append(cardH3);

        const cardText = document.createElement('p');
        cardText.textContent = card.texto;
        infoCard.append(cardText);
        fragment.append(infoCard);
    })
    recomendadosContainer.append(fragment);
};

function random(arr) {
    return Math.floor(Math.random() * arr.length);
}

//INVOCACIÓN DE FUNCIONES
pintarOpciones();
pintarBanner();
pintarCards();