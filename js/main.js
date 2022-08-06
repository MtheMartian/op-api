alert('Poop');
document.querySelector('button').addEventListener('click', getInfo);
const createText = document.createElement('p');
const createImg = document.createElement('img');

async function getInfo(){
  if(document.querySelector('section').childElementCount != 0){
      document.querySelector('p').remove();
      document.querySelector('p').remove();
      document.querySelector('p').remove();
      document.querySelector('img').remove();
  }
  else{
    try{
      const charName = document.querySelector('input').value;
      const response = await fetch(`/api/${charName}`);
      const data = await response.json();
    
      console.log(data);
      document.querySelector('section').appendChild(createText.cloneNode()).textContent = data.name;
      document.querySelector('section').appendChild(createText.cloneNode()).textContent = data.age;
      document.querySelector('section').appendChild(createText.cloneNode()).textContent = data.type;
      document.querySelector('section').appendChild(createImg).src = data.img;
    }
    catch{
      console.log("You fked up!");
    }
  }
}