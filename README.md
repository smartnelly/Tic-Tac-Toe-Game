## **Tic Tac Toe**

- **Render the game board in the browser**
- **Switch turns** between 🐱 and 🐶
- **Visually display which side won** when a player gets three in a row or show "🐱 Wins"/ a draw if neither wins
- **Separate HTML / CSS / JavaScript files included**
- Use **Javascript / jQuery** for **DOM manipulation**
- **Deploy game [ONLINE](https://smartnelly.github.io/Tic-Tac-Toe-Game/)**
- Use **semantic markup** for HTML and CSS

---

### Code Logic Strcture

- make a 3\*3 table in HTML file
- basic CSS set up
- JavaScript / jQuery

  - click `this` box will trigger `"click"` function, then append 🐱 or 🐶 in the `this` box by checking it is a 🐱 / 🐶 turn first
  - check if player get 3 in row / column / diagonal by runing `findWinner` function
  - when Winner come out add CSS class `"blink"` on `<table>` and alert the Winner and restart the game by click `ok`

---

# PLAY [HERE](https://smartnelly.github.io/Tic-Tac-Toe-Game/)
