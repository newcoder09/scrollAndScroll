// Api Unsplash

const count = 5;
const apiKey = `eYkjfOuk-RvnO3dC3B5kPtZs87KFR_bM6lvncAqznPk`;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// Get the photos from unsplash animationPlayState: 

async function getPhotos() {
    try {
       const respnse = await fetch(apiUrl); 
       const data = await respnse.json();
       console.log(data);
    
} catch (error){

}
}

// on Load

getPhotos()