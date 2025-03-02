
function generateName(){
        fetch('./utilities/namegenerator/data/namelist.json')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            commonNames = data.common;
            royalSurnames = data.royalSurnames;
            document.getElementById("quarName").innerHTML = getRandomElement(data.common) + " " + getRandomElement(data.common);
          })
          .catch(error => console.error('Error loading JSON:', error));
          
}

function getRandomElement(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}