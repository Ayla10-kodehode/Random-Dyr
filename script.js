/*const container = document.getElementById("imageContainer");
let animalPic = [
  "Images/bird.jpg",
  "Images/bunny.jpg",
  "Images/cat.jpg",
  "Images/cow.jpg",
  "Images/duck.jpg",
  "Images/fox.jpg",
  "Images/frog.jpg",
  "Images/gris.jpg",
  "Images/koala.jpg",
  "Images/otter.jpg",
];
let animalName = [
  "Bird",
  "Bunny",
  "Cat",
  "Cow",
  "Duck",
  "Fox",
  "Frog",
  "Pig",
  "Koala",
  "Otter",
];

function randomPic(){
    let randomAnimal = animalPic[Math.floor(Math.random()*animalPic.length)];
    if (container.innerHTML =! ""){
        container.innerHTML = ""
    }
    const img = document.createElement("img");
    img.src = randomAnimal;
    container.append(img);
   
}
*/

let animal = [
  {
    name: "Bird",
    pic: "Images/bird.jpg",
  },
  {
    name: "Bunny",
    pic: "Images/bunny.jpg",
  },
  {
    name: "Cat",
    pic: "Images/cat.jpg",
  },
  {
    name: "Cow",
    pic: "Images/cow.jpg",
  },
  {
    name: "Duck",
    pic: "Images/duck.jpg",
  },
  {
    name: "Fox",
    pic: "Images/fox.jpg",
  },
  {
    name: "Frog",
    pic: "Images/frog.jpg",
  },
  {
    name: "Gris",
    pic: "Images/gris.jpg",
  },
  {
    name: "Koala",
    pic: "Images/koala.jpg",
  },
  {
    name: "Otter",
    pic: "Images/otter.jpg",
  },
];

let container = document.getElementById("imageContainer");

function randomPic(){
    let randomAnimal = animal[Math.floor(Math.random()*animal.length)];
    if (container.innerHTML =! ""){
        container.innerHTML = ""
    }
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = randomAnimal.pic;
    p.textContent = randomAnimal.name;

    img.classList.add("image")
    p.classList.add("text")

    container.appendChild(img)
    container.appendChild(p)
   
}
