$(document).ready(function () {
  let round = 1;
  let gameContinue = true;

  $("table tr td").on("click", function () {
    if ($(this).text() == "" && gameContinue) {
      // empty box
      if (round % 2 == 1) {
        // 1st 3rd 5th 7th 9th play
        $(this).append("X");
        $(this).addClass("clickedX");
      } else {
        // 2nd 4th 6th 8th play
        $(this).append("O");
        $(this).addClass("clickedO");
      }
      round++;

      const winner = findWinner();

      if (winner !== "" && winner !== false) {
        if (winner === "X") {
          setTimeout(function () {
            alert("X Win!!") ? "" : location.reload();
          }, 100);
        } else if (winner === "O") {
          setTimeout(function () {
            alert("O Win!!") ? "" : location.reload();
          }, 100);
        } else {
          setTimeout(function () {
            alert("No one Wins!!") ? "" : location.reload();
          }, 100);
        }
        gameContinue = false;
      }
    }
  });
});

/*

box1 box2 box3
box4 box5 box6
box7 box8 box9 

*/

const findWinner = function () {
  const box1 = $("table .r1 td:nth-child(1)").text();
  const box2 = $("table .r1 td:nth-child(2)").text();
  const box3 = $("table .r1 td:nth-child(3)").text();
  const box4 = $("table .r2 td:nth-child(1)").text();
  const box5 = $("table .r2 td:nth-child(2)").text();
  const box6 = $("table .r2 td:nth-child(3)").text();
  const box7 = $("table .r3 td:nth-child(1)").text();
  const box8 = $("table .r3 td:nth-child(2)").text();
  const box9 = $("table .r3 td:nth-child(3)").text();
  //row equal
  if (box1 == box2 && box1 == box3 && box2 == box3) {
    return box3;
  } else if (box4 == box5 && box5 == box6 && box4 == box6) {
    return box6;
  } else if (box7 == box8 && box8 == box9 && box7 == box9) {
    return box9;
  }
  //column equal
  else if (box1 == box4 && box4 == box7 && box1 == box7) {
    return box7;
  } else if (box2 == box5 && box5 == box8 && box2 == box8) {
    return box8;
  } else if (box3 == box6 && box6 == box9 && box3 == box9) {
    return box9;
  }

  //diagonal equal
  else if (box1 == box5 && box5 == box9 && box1 == box9) {
    return box9;
  } else if (box3 == box5 && box5 == box7 && box3 == box7) {
    return box7;
  }

  //not win
  else {
    return false;
  }
};
