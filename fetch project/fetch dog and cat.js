// variables
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");

// events 
catBtn.addEventListener('click',getRandomCat);

dogBtn.addEventListener('click',getRandomDog);

//functions

function getRandomCat(){
    fetch('https://aws.random.cat/meow')
    .then(result=>result.json())
    .then (data => {
        let img = document.createElement('img');
        img.setAttribute('src',data.file);
        cat_result.innerText="";
        cat_result.appendChild(img);
    })

}




function getRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(process=>{
       return process.json()
    })
    .then(data=>{
        let img = document.createElement('img');
        img.setAttribute('src',data.message);
        dog_result.innerText="";
        dog_result.appendChild(img);
    })
}

