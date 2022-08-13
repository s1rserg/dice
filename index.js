let randomNumber1;
let randomNumber2;

let image1 = document.querySelector('#img1');
let image2 = document.querySelector('#img2');

randomNumber1 = Math.ceil(Math.random() * 6);
randomNumber2 = Math.ceil(Math.random() * 6);

let h1 = document.querySelector('h1');

function dice (number, image){
  if(number == 1){
    image.src = "images/dice1.png"
  } else if(number == 2){
    image.src = "images/dice2.png"
  } else if(number == 3){
    image.src = "images/dice3.png"
  } else if(number == 4){
    image.src = "images/dice4.png"
  } else if(number == 5){
    image.src = "images/dice5.png"
  } else{
    image.src = "images/dice6.png"
  };
}

dice(randomNumber1, image1);
dice(randomNumber2, image2);

if(randomNumber1 > randomNumber2){
  h1.innerHTML = '<i class="fa-solid fa-hand-peace"></i>Player 1 won';
} else if(randomNumber1 < randomNumber2){
  h1.innerHTML = 'Player 2 won<i class="fa-solid fa-hand-peace"></i>';
} else{
  h1.innerHTML = 'Draw';
};
