
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById('loader');


let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


//  Api Unsplash
let count = 5;
const apiKey = `eYkjfOuk-RvnO3dC3B5kPtZs87KFR_bM6lvncAqznPk`;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Checking to see if all images have loaded function.

function imageLoaded() {
   imagesLoaded++;
   
   if(imagesLoaded === totalImages){
      ready = true;
      loader.hidden = true;
      count = 30
      apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
   }
}



// function to set attributes on Dom
function setAttributes(element, attributes) {
   for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
   }
}



// function that creates the elements to view, link to unsplash , create and image and put into the container
function displayPhotos() {
   imagesLoaded = 0;
   totalImages = photosArray.length;
   
   photosArray.forEach((photo)=> {
    const item = document.createElement('a');
   //  item.setAttribute('href', photo.links.html);
   //  item.setAttribute('target', '_blank');

   setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
   })

    const img = document.createElement('img');
   //  img.setAttribute('src', photo.urls.regular);
   //  img.setAttribute('alt', photo.alt_description)
   //  img.setAttribute('title', photo.alt_description);

   setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      alt: photo.alt_description,
   });

   // Check Even listener to see when each load is finished

   img.addEventListener('load', imageLoaded);

    item.appendChild(img);
    imageContainer.appendChild(item);
   });
}

async function getPhotos() {
try {
   const response = await fetch(apiUrl);
   photosArray = await response.json();
   displayPhotos();
   
  
} catch (error){

}

}

// Ensure when the page reaches the bottom more images are loaded

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
   ready = false;
   getPhotos();
  }
});

getPhotos();
