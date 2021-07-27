var canvas = document.getElementById("canvas");
var box = canvas.getContext("2d");

var craft = new Image();
craft.src = "craft3.jpg";

var craft_x = 320;
var craft_y = 335;

var alienship = new Image();
alienship.src = "ufo1.png";

var bullet = new Image();
bullet.src = "bullet.png";
var cy = craft_y;

var alienship_x = 650;
var alienship1_x = 50;
var alienship2_x = 50;
var alienship3_x = 50;
var dx = 2.5;
var alienship1_y = 45;

var score = 0;
var yourscore = document.getElementById("yours");

window.requestAnimationFrame(function draw() {
  box.clearRect(0, 0, canvas.width, canvas.height);
  alienship_x -= 3;
  alienship1_x -= dx;
  alienship2_x -= 3;
  alienship3_x -= 1.5;
  box.drawImage(craft, craft_x, craft_y, 80, 80);
  box.drawImage(alienship, alienship_x, alienship1_y, 50, 50);
  box.drawImage(alienship, alienship1_x, alienship1_y, 50, 50);
  box.drawImage(alienship, alienship2_x, 235, 50, 50);
  box.drawImage(alienship, alienship3_x, 395, 50, 50);

console.log(score);
if (score>20){
  alienship_x -= 4;
  alienship1_x -= dx+1;
  alienship2_x -= 4;
  alienship3_x -= 3.5;
  box.drawImage(craft, craft_x, craft_y, 80, 80);
  box.drawImage(alienship, alienship_x, alienship1_y, 50, 50);
  box.drawImage(alienship, alienship1_x, alienship1_y, 50, 50);
  box.drawImage(alienship, alienship2_x+90, 260, 50, 50);
  box.drawImage(alienship, alienship3_x, 410, 50, 50);

}
if(score>10){
  alienship_x -= 3.5;
  alienship1_x -= dx+0.5;
  alienship2_x -= 3.5;
  alienship3_x -= 3;
  box.drawImage(craft, craft_x, craft_y, 80, 80);
  box.drawImage(alienship, alienship_x, alienship1_y, 50, 50);
  box.drawImage(alienship, alienship1_x, alienship1_y, 50, 50);
  box.drawImage(alienship, alienship2_x, 235, 50, 50);
  box.drawImage(alienship, alienship3_x, 400, 50, 50);
}

  if (alienship3_x < -100) {
    alienship3_x = 760;
  }

  if (alienship2_x < -100) {
    alienship2_x = 760;
  }

  if (alienship1_x < -100) {
    alienship1_x = 760;
  }

  if (alienship_x < -100) {
    alienship_x = 760;

    document.addEventListener("keydown", function (e) {
      if (e.which === 37) {
        //left arrow key
        craft_x = craft_x - 2;
        if (craft_x < -15) {
          craft_x = -15;
        }
      }
      if (e.which === 39) {
        //right arrow key
        craft_x = craft_x + 2;
        if (craft_x > 690) {
          craft_x = 690;
        }
      }
      if (e.which === 38) {
        //up arrow key
        craft_y = craft_y - 2;
        if (craft_y < 0) {
          craft_y = 0;
        }
      }
      if (e.which === 40) {
        //down arrow key
        craft_y = craft_y + 2;
        if (craft_y > 395) {
          craft_y = 395;
        }
      }


      if (
        (craft_x === alienship_x && craft_y === alienship1_y) ||
        (craft_x === alienship1_x && craft_y === alienship1_y) ||
        (craft_x === alienship2_x && craft_y === 235) ||
        (craft_x === alienship3_x && craft_y === 395)
      ) {
        var r = alert(
          "Game Over : Refresh the game and then press OK to play again!"
        );
        if (r == false) {
          window.location.reload();
        }
      }
    });
  }

    //saving and displaying high score in local storage
    var highs = document.getElementById("highs");
    var highscore = 0;
  
    var highscore = localStorage.getItem("highscore");
    highs.innerHTML = highscore;
    if (highscore !== null) {
      if (score > highscore) {
        localStorage.setItem("highscore", score);
        highs.innerHTML = highscore;
      }
    } else {
      localStorage.setItem("highscore", score);
      highs.innerHTML = highscore;
    }
  

  window.requestAnimationFrame(draw);

  box.fillStyle = "orange";
  box.fillRect(0, 0, 250, 35);

  box.fillStyle = "white";
  box.fillRect(250, 0, 500, 35);

  box.fillStyle = "green";
  box.fillRect(500, 0, 750, 35);

  //firing the bullets
  var cx = craft_x+35;
  cy -= 15;
  box.drawImage(bullet, cx, cy, 10, 17);
  if(cy<=0){
      cy=craft_y;
  }

  // console.log(cx);
  // console.log(cy);
  console.log(alienship1_x);
  console.log(alienship1_y);

  let x_axis = Math.abs(bullet.x - alienship.x) <= Math.max(bullet.width,alienship.width);
  let y_axis = Math.abs(bullet.y - alienship.y) <= Math.max(bullet.height,alienship.height);
  if(!x_axis && y_axis){
    alert("game over");
  }
  


  
});

if (
  (craft_x === alienship_x  && craft_y === alienship1_y) ||
  (craft_x === alienship1_x && craft_y === alienship1_y) ||
  (craft_x === alienship2_x && craft_y === 235) ||
  (craft_x === alienship3_x && craft_y === 395)
){
  var r = alert(
    "Game Over : Refresh the game and then press OK to play again!"
  );
  if (r == false) {
    window.location.reload();
  }
}

//adding timer
const startingMinutes = 0;
let time = startingMinutes * 60;
var seconds = 0;

const countdownEl = document.getElementById("timern");

setInterval(function updateCountdown() {
  const minutes = Math.floor(time / 60);
  seconds = time % 60;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time++;
  score++;
  yourscore.innerHTML = score+4;
}, 1000);
