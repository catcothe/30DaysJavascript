function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  if (!audio) return;


  // that is already playing, it won't play it
  // again because it's like, "oh, why would I do that? I'm clearly
  // already playing with that." So what we
  // want to do before we do that is sort of
  // rewind it to the start of the element so that if you hit it in succession over and
  // over again and over again,
  // it will just rewind it to the start. So
  // let's say "audio.currenTime=0." Now this is going to rewind to the start.

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  setTimeout(function(){
  
    audio.currentTime = 20;
  }, 2000)

}

function removeTransition(e) {
    
  if (e.propertyName !== 'transform') return;
  this.classList.remove("playing");

//   const audio = document.querySelector("audio");
//   audio.currentTime = 20;  // is not working

}

const boxes = document.querySelectorAll('.box');  //foreach array döner dolayısıyla boxes yerine box kullanmalıyız ki boxları bir array olarak görsün
boxes.forEach((box) => box.addEventListener('transitionend', removeTransition));  // hepsini aynı anda dinleyemiyoruz for loop ile transitioned olanı bulmamız gerekiyor

window.addEventListener("keydown", playSound);



// function stopSound(e) {
//     if(e.keyCode == 32){
//         const audio = document.querySelector("audio");
//     if (!audio) return;
//     audio.currentTime = 20;
//     }
// }

// window.addEventListener("keydown", stopSound);