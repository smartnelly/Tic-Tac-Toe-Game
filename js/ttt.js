$(document).ready(function () {
  let round = 1;
  $("td").on("click", function () {
    if ($(this).text() == "") {
      // empty box
      if (round % 2 == 1) {
        // 1st 3rd 5th 7th 9th play
        $(this).append("🐱");
        $(this).addClass("clickedX");
      } else {
        // 2nd 4th 6th 8th play
        $(this).append("🐶");
        $(this).addClass("clickedO");
      }

      round++;

      /* 
    check NoOneWins Later

    if the not 3 eqal in row & column & diagonal
      */
      let str = "";
      $("td").each(function () {
        str += $(this).text();
      });

      const winner = findWinner();
      if (winner !== -1) {
        if (winner === "🐱") {
          setTimeout(function () {
            // X win
            alert("🐱 Wins!!") ? "" : location.reload();
          }, 100);
        } else if (winner === "🐶s") {
          setTimeout(function () {
            // O win
            alert("🐶 Wins!!") ? "" : location.reload();
          }, 100);
        }
      } else if (winner === -1 && str.length === 9) {
        setTimeout(function () {
          // No ONE wins
          alert("It's a DRAW!!") ? "" : location.reload();
        }, 100);
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
  const box1 = $("#b1").text();
  const box2 = $("#b2").text();
  const box3 = $("#b3").text();
  const box4 = $("#b4").text();
  const box5 = $("#b5").text();
  const box6 = $("#b6").text();
  const box7 = $("#b7").text();
  const box8 = $("#b8").text();
  const box9 = $("#b9").text();

  //row equal
  if ((box1 === box2) & (box1 === box3) & (box1 !== "")) {
    return box3;
  } else if ((box4 === box5) & (box5 === box6) & (box4 !== "")) {
    return box6;
  } else if ((box7 === box8) & (box8 === box9) & (box7 !== "")) {
    return box9;
    //column equal
  } else if ((box1 === box4) & (box4 === box7) & (box1 !== "")) {
    return box7;
  } else if ((box2 === box5) & (box5 === box8) & (box2 !== "")) {
    return box8;
  } else if ((box3 === box6) & (box3 === box9) & (box3 !== "")) {
    return box3;
    //diagonal equal
  } else if ((box1 === box5) & (box5 === box9) & (box1 !== "")) {
    return box9;
  } else if ((box3 === box5) & (box5 === box7) & (box3 !== "")) {
    return box7;
    //not win + not complete game
  }
  return -1;
};
