document.querySelector(".control-button span").onclick = function(){
  let Name = prompt("What's Your Name?");
  let Field = document.querySelector(".name span");
  
  if(Name == null || Name == ""){
    Field.innerHTML = "Unknown";
  } else {
    Field.innerHTML = Name;
  }

  document.querySelector(".control-button").remove();
};

let duration =1000;
let blocksContainer = document.querySelector(".memo-game-blocks");
let blocks = Array.from(blocksContainer.children);
let orderRange = [...blocks.keys()];

shuffle(orderRange);
console.log(orderRange);

let click = 0;

blocks.forEach(function(item, i){
  item.style.order = orderRange[i];


  item.addEventListener('click', ()=>{
    click++;
    if(click <= 2){
      cardFlip(item, click);
    }

    let chosen = document.querySelectorAll(".is-flipped");
    let tries = document.querySelector(".tries span");
    if(chosen[0].getAttribute("data-technology") == chosen[1].getAttribute("data-technology")){
      chosen.forEach(function(item){
        item.classList.remove("is-flipped");
        item.classList.add("is-flipped-s");
      });
    } else {
      tries.innerHTML ++;
    }
    
    let done = document.querySelectorAll(".is-flipped-s");
    if(done.length == orderRange.length){
      document.querySelector(".done-page").style.display = "block";
    }

  });

});

let card = document.querySelector(".game-block");
console.log(card);


function shuffle(array){
  let current = array.length,
      temp,
      random;
  
  while (current > 0){
    random = Math.floor(Math.random()*current);
    temp = array[current-1];
    array[current-1] = array[random];
    array[random] = temp;
    current --;

  }
}

function cardFlip(card, num){
  if(num == 2){
    card.classList.add("is-flipped");
    setTimeout(()=>{
      let array= document.querySelectorAll(".is-flipped");
      array.forEach(function(item){
        item.classList.remove("is-flipped");
      });
    },1000);
    click = 0;
  } else if (num == 1){
    card.classList.add("is-flipped");
  } else {
    console.log("error");
  }
  
}