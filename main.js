// VARIABLES
const destinosArray = ['A Coruña', 'San Francisco', 'Seúl', 'Tokyo', 'Berlín', 'Móstoles', 'San Fernando de Henares'];
const imgArray = ['assets/viajes/viajes-1.jpg', 'assets/viajes/viajes-2.jpg', 'assets/viajes/viajes-3.jpg', 'assets/viajes/viajes-4.jpg', 'assets/viajes/viajes-5.jpg', 'assets/viajes/viajes-6.jpg', 'assets/viajes/viajes-7.jpg'];
const bannerArray = ['assets/banner/1.jpg', 'assets/banner/2.jpg', 'assets/banner/3.jpg', 'assets/banner/4.jpg', 'assets/banner/5.jpg', 'assets/banner/6.jpg', 'assets/banner/7.jpg', 'assets/banner/1.jpg'];
const textoArray = ['Phasellus libero quam, feugiat at sagittis vitae, maximus ac ex. Vivamus mattis aliquam felis sed imperdiet. Donec ultricies posuere nisi, ac lobortis nulla aliquet sed. Maecenas eu malesuada massa, vel porta nibh. Proin sit amet molestie magna. Vivamus quis libero in eros ornare posuere.', 'Praesent nec tempus ligula. Donec sem dolor, dignissim eu luctus vitae, porta in nisl. Nam eleifend rutrum efficitur. Nam mollis erat nec risus bibendum, vitae tincidunt dui pellentesque. Nunc commodo felis at risus bibendum tempus. Nunc tortor nisl, interdum et sapien sit amet, porttitor dignissim leo.', 'Aliquam elementum pellentesque mi porta dictum. Aenean tempus, velit facilisis facilisis ornare, nunc neque semper ante, vitae tincidunt purus nisi at justo. Cras in iaculis purus. Ut purus lacus, pellentesque pretium elementum sit amet, euismod vel elit.', 'Etiam dapibus lorem ut lectus dapibus facilisis. Praesent fringilla nec velit vitae porttitor. Nullam tincidunt lobortis lectus, at tincidunt velit molestie sed.', 'Ut egestas, ante eget molestie pretium, turpis odio rhoncus sapien, ut feugiat risus est vel arcu. Nulla facilisi. Nulla nec porttitor erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed id mattis lectus, vitae lobortis purus.', 'Fusce mauris sem, lacinia et dolor ac, ornare lobortis neque. Etiam dolor felis, auctor et nibh ac, venenatis porta justo. Donec facilisis sem nisl, quis consequat lacus aliquet quis. Aenean mattis quam vitae ligula consequat, vel mollis purus euismod.', 'Quisque interdum, nibh sed lobortis dictum, libero quam accumsan mi, ut fermentum nibh ligula a nibh. In in semper ex. Cras mattis auctor ligula, vitae ultricies purus.', 'Phasellus fringilla ex vitae eros pretium cursus. Quisque vehicula felis ultricies, viverra odio eget, tincidunt ex. Duis sagittis, elit sed fringilla tempor, libero tortor bibendum eros, ut fringilla quam urna eu nunc.'];

const bienvenidosContainer = document.querySelector('.container-bienvenidos');
const recomendadosContainer = document.querySelector('.container-recomendados');
const select = document.querySelector('select');

const banner = document.createElement('img');
banner.classList.add('imagen-banner');
banner.setAttribute('src', `${randomBanner(bannerArray)}`);
banner.setAttribute('alt', `banner`);
bienvenidosContainer.appendChild(banner);

const optionFragment = document.createDocumentFragment();
destinosArray.forEach((destino) => {
    const option = document.createElement('option');
    option.textContent = destino;
    option.setAttribute('value', `${destino}`)
    optionFragment.appendChild(option);
});
select.appendChild(optionFragment);

const cardsFragment = document.createDocumentFragment();
imgArray.forEach((card, index) => {
    const infoCard = document.createElement('div');
    infoCard.classList.add('cartas-destinos');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    infoCard.appendChild(imageContainer);
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', `${card}`);
    cardImg.setAttribute('alt', `imagen ${destinosArray[index]}`)
    imageContainer.appendChild(cardImg);
    const cardH3 = document.createElement('h3');
    cardH3.textContent = destinosArray[index];
    infoCard.appendChild(cardH3);
    const cardText = document.createElement('p');
    cardText.textContent = textoArray[index];
    infoCard.appendChild(cardText);
    cardsFragment.appendChild(infoCard);
});
recomendadosContainer.appendChild(cardsFragment);





// FUNCIONES
function randomBanner(arr) {
    return arr[Math.floor(Math.random() * 7) + 1]
}

