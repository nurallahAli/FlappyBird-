const obstacle = document.querySelector("#obstacle");
const hole = document.querySelector("#hole");
const brid = document.querySelector("#brid");

let score = 0;

// Set Rondom Hole Every Animation Loop

hole.addEventListener("animationiteration", () => {
  let rand = Math.random() * (500 - 150);
  hole.style.top = rand + "px";

  score++;
});

setInterval(function () {
  //  Apply Gravity to Bird
  let bridTop = parseInt(getComputedStyle(brid).getPropertyValue("top"));
  if (!isjumping) {
    brid.style.top = bridTop + 3 + "px";
  }
  let obstacleLeft = parseInt(
    getComputedStyle(obstacle).getPropertyValue("left")
  );
  let holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
  //  Game Over
  if (
    bridTop > 480 &&
    obstacleLeft < 20 &&
    (bridTop > holeTop + 150 || bridTop < holeTop)
  ) {
    alert(`Game Over. Your ScoreI Is ${score}`);
    brid.style.top = 100 + "px";
    obstacle.style.left = "100%";
    hole.style.left = "100%";

    score = 0;
  }
}, 10);

// Jumping
let isjumping = false;
document.addEventListener(
  "click",
  () => {
    isjumping = true;
    let jumpTimer = 0;

    let jumpInterval = setInterval(function () {
      jumpTimer++;
      let bridTop = parseInt(getComputedStyle(brid).getPropertyValue("top"));
      if (bridTop > 0 && jumpTimer < 15) {
        brid.style.top = bridTop - 5 + "px";
      }
      if (jumpTimer > 20) {
        clearInterval(jumpInterval);
        isjumping = false;
        jumpTimer = 0;
      }
    });
  },
  10
);
