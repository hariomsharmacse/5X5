const boxes = document.querySelectorAll(".item");
let turnx = false;
let dispalyMsg = document.querySelector("h1");
const changeTurn = document.querySelector('#changeBtn');

let winningPattern = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

handleHover();

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnx) {
      box.innerText = "❌";
      turnx = false;
    } else {
      box.innerText = "✔️";
      turnx = true;
    }

    box.disabled = true;
    changeTurn.disabled = true;
    checkWins();
    handleHover();
  });
});

function checkWins() {
  for (let win of winningPattern) {
    let box0 = boxes[win[0]].innerText;
    let box1 = boxes[win[1]].innerText;
    let box2 = boxes[win[2]].innerText;
    let box3 = boxes[win[3]].innerText;
    let box4 = boxes[win[4]].innerText;

    if (box0 != "" && box1 != "" && box2 != "" && box3 != "" && box4 != "") {
      if (box0 == box1 && box1 == box2 && box2 == box3 && box3 == box4) {
        console.log("winner is:", box0);
        dispalyMsg.innerText = `You Win: ${box0}`;
        let newBtn = document.createElement("button");
        newBtn.innerText = "New Game";
        newBtn.id = "newBtn";
        dispalyMsg.appendChild(newBtn);
        boxes.forEach((box) => {
          box.disabled = true;
          
              box.classList.remove('right')
              box.classList.remove('cross');
          
        });

        newBtn.addEventListener("click", () => {
          boxes.forEach((box) => {
            box.innerText = "";
            turnx = false;
            dispalyMsg.innerText = "Tic Tac Toe - 5X5";
            box.disabled = false;
            handleHover();
            changeTurn.disabled = false;
          });
        });
      }
    }
  }
}

function handleHover() {
  boxes.forEach((box) => {
    if (turnx) {
      if (!box.classList.contains("cross")) {
        if (box.innerText === "✔️") {
          console.log("rihgt");
        } else {
          box.classList.add("cross");
          checkWins();
        }
        if (box.classList.contains("right")) {
          box.classList.remove("right");
        }

        console.log(box.classList.contains("cross"));
      }
    } else {
      if (!box.classList.contains("right")) {
        if (box.innerText === "❌") {
          console.log("right");
        } else {
          box.classList.add("right");
          checkWins();
        }
        if (box.classList.contains("cross")) {
          box.classList.remove("cross");
        }
        console.log(box.classList.contains("right"));
      }
    }
  });
}

changeTurn.addEventListener('click', () => {
    if(turnx){
        turnx = false;
    }else{
        turnx = true;
    }
    handleHover();
})


