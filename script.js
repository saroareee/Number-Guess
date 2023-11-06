let oneinput = document.querySelector(".oneinput");
let onebutton = document.querySelector(".onebutton");
let oneinput2 = document.querySelector(".oneinput2");
let onebutton2 = document.querySelector(".onebutton2");
let oneinput3 = document.querySelector(".oneinput3");
let onebutton3 = document.querySelector(".onebutton3");
let error = document.querySelector(".error");
let error1 = document.querySelector(".error1");
let title = document.querySelector(".title");
let chance = document.querySelector(".chance");
let span = document.querySelector("span");
let result = document.querySelector(".result");
let move = document.querySelector(".move");
let sky = document.querySelector(".sky");

let plaintext1 = error1.innerHTML;
console.log(plaintext1.length);
console.log(plaintext1);
let text1 = error1.innerHTML.split("");
error1.innerHTML = "";
let plaintext = error.innerHTML;
console.log(plaintext.length);
console.log(plaintext);
let text = error.innerHTML.split("");
error.innerHTML = "";
let er_count = -1;

let playeronenumber = "";
let count = 5;
sky.style.backgroundSize = "cover";
onebutton.addEventListener("click", function () {
  if (oneinput.value == "") {
    error.classList.remove("d-none");
    setInterval(function () {
      typejs();
    }, 600);
    // error.innerHTML = "Please give a number";
  } else {
    console.log(oneinput.value - 1);
    console.log(Boolean(oneinput.value - 1));
    if (!(oneinput.value - 1 == 0 ? true : oneinput.value - 1)) {
      error1.classList.remove("d-none");
      setInterval(function () {
        typejs1();
      }, 600);
      // error.innerHTML = "Please give a number not text or other symbols";
    } else {
      if (oneinput.value > 10 || oneinput.value < 1) {
        error.innerHTML = "Number must be in between 1 to 10";
        error.classList.remove("d-none");
        
      } else {
        playeronenumber = oneinput.value * 9;
        error.classList.add("d-none");
        title.innerHTML = "Player 2";
        oneinput2.classList.remove("d-none");
        onebutton2.classList.remove("d-none");
        oneinput.classList.add("d-none");
        onebutton.classList.add("d-none");
        chance.classList.remove("d-none");
        span.innerHTML = count;
      }
    }
  }
});

onebutton2.addEventListener("click", function () {
  if (count > 1) {
    count--;
    span.innerHTML = count;
   
    if (playeronenumber == oneinput2.value) {
      console.log("player two winner");
      oneinput2.classList.add("d-none");
      onebutton2.classList.add("d-none");
      oneinput.classList.add("d-none");
      onebutton.classList.add("d-none");
      chance.classList.remove("d-none");
      oneinput3.classList.remove("d-none");
      onebutton3.classList.remove("d-none");
      title.innerHTML = "Player 3";
      count = 5;
      span.innerHTML = count;
    }
  } else {
    document.getElementById('clear').value = '';
    // console.log("player one winner");
    // console.log("player two winner");
    oneinput2.classList.add("d-none");
    onebutton2.classList.add("d-none");
    oneinput.classList.add("d-none");
    onebutton.classList.add("d-none");
    chance.classList.remove("d-none");
    oneinput3.classList.remove("d-none");
      onebutton3.classList.remove("d-none");
      title.innerHTML = "Player 3";
      // count = 5;
      // span.innerHTML = count;
    // title.innerHTML = "Player 1 Winner";
  }
  
});
onebutton3.addEventListener("click", function () 
{
  
  if (count > 1) {
    count--;
    span.innerHTML = count;
    if (playeronenumber == oneinput3.value) {
      count = 0;
      span.innerHTML = count;
      oneinput2.classList.add("d-none");
      onebutton2.classList.add("d-none");
      oneinput.classList.add("d-none");
      onebutton.classList.add("d-none");
      oneinput3.classList.remove("d-none");
      onebutton3.classList.remove("d-none");
      chance.classList.add("d-none");
      show_result();
 
    }else{
      document.getElementById('clear1').value = '';
      console.log("input 3 is mismatched")
      oneinput2.classList.add("d-none");
      onebutton2.classList.add("d-none");
      oneinput.classList.add("d-none");
      onebutton.classList.add("d-none");
      oneinput3.classList.remove("d-none");
      onebutton3.classList.remove("d-none");
      chance.classList.remove("d-none");
      
    }
    
  }
  
});


//----------Result Function--------//


function show_result()
{
  if(playeronenumber == oneinput2.value && playeronenumber == oneinput3.value)
  {
    console.log("player two winner");
    oneinput3.classList.add("d-none");
    onebutton3.classList.add("d-none");
    oneinput2.classList.add("d-none");
    onebutton2.classList.add("d-none");
    oneinput.classList.add("d-none");
    onebutton.classList.add("d-none");
    chance.classList.add("d-none");
    title.classList.add("d-none");
    move.classList.remove("d-none");
    result.innerHTML = "Player 2 & 3 are Winners";
    document.body.style.background = "url('win.jpg') no-repeat";
    
  }
  else if (playeronenumber != oneinput2.value && playeronenumber == oneinput3.value) 
  {
    console.log("player two winner");
    oneinput3.classList.add("d-none");
    onebutton3.classList.add("d-none");
    oneinput2.classList.add("d-none");
    onebutton2.classList.add("d-none");
    oneinput.classList.add("d-none");
    onebutton.classList.add("d-none");
    chance.classList.add("d-none");
    title.classList.add("d-none");
    move.classList.remove("d-none");
    result.innerHTML = "Player 3 Winner";
    document.body.style.background = "url('win.jpg') no-repeat";
  }
  else if (playeronenumber == oneinput2.value && playeronenumber != oneinput3.value) 
  {
    // console.log("player two winner");
    oneinput3.classList.add("d-none");
    onebutton3.classList.add("d-none");
    oneinput3.classList.add("d-none");
    onebutton3.classList.add("d-none");
    oneinput2.classList.add("d-none");
    onebutton2.classList.add("d-none");
    oneinput.classList.add("d-none");
    onebutton.classList.add("d-none");
    chance.classList.add("d-none");
    title.classList.add("d-none");
    move.classList.remove("d-none");
    result.innerHTML = "Player 2 Winner";
    document.body.style.background = "url('win.jpg') no-repeat";
  }
  else {
    // console.log("player one winner");
    // console.log("player two winner");
    oneinput3.classList.add("d-none");
    onebutton3.classList.add("d-none");
    oneinput3.classList.add("d-none");
    onebutton3.classList.add("d-none");
    oneinput.classList.add("d-none");
    onebutton.classList.add("d-none");
    chance.classList.add("d-none");
    title.classList.add("d-none");
    move.classList.remove("d-none");
    result.innerHTML = "Player 1 Winner";
    document.body.style.background = "url('win.jpg') no-repeat";
  }
}

//----------Result Function--------//
//---------Error typing-----------//
function typejs() {
  if (er_count < text.length) {
    er_count++;
    error.innerHTML += plaintext.charAt(er_count);
    text = plaintext.split("");
    console.log(text);
  } else {
    text.pop();
    error.innerHTML = text.join("");
    if (text.length == 0) {
      er_count = -1;
    }
  }
  
}
function typejs1() {
  if (er_count < text1.length) {
    er_count++;
    error1.innerHTML += plaintext1.charAt(er_count);
    text1 = plaintext1.split("");
    console.log(text1);
  } else {
    text1.pop();
    error1.innerHTML = text1.join("");
    if (text1.length == 0) {
      er_count = -1;
    }
  }
  
}

//-----------Result Movement------------//
window.addEventListener("mousemove", function (e) {
  console.log("ami", e.clientX, e.clientY);
  move.style.top = `-${e.clientY / 4}px`;
  move.style.left = `-${e.clientX / 4}px`;
});


// setInterval(function () {
//   typejs();
// }, 600);
// function typejs()
// {
//   if (er_count < text.length) {
//     er_count++;
//     type.innerHTML += plaintext.charAt(er_count);
//     text = plaintext.split("");
//   } else {
//     text.pop();
//     type.innerHTML = text.join("");
//     if (text.length == 0) {
//       er_count = -1;
//     }
//   }
//   console.log(text);
//   console.log(count);
// }
//---------Error typing-----------//
