document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll(".box");

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];
    let turn = "X";
    const winner = (ans) => {
        const winnerNameElement = document.querySelector(".winnername");
        const modal = document.querySelector(".modal");
        winnerNameElement.innerText = `Winner is ${ans}`;
        modal.style.display = "block";
    };
    const checkWinner = () => {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText && boxes[a].innerText !== '') {
                winner(boxes[a].innerText );
                return;
            }
        }
    };

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.innerText === '') {
                box.innerText = turn;
                checkWinner();
                turn = (turn === "X") ? "O" : "X";
            }
        });
    });
});