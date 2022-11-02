// Const
const boardMenu = document.querySelector(`.board-menu`);

// Const LeaderBoard
const leaderBoard = document.querySelector(`.leaderboard-section`);
const leaderBoardClose = document.querySelector(`.fa-xmark`);


// Events listeners
boardMenu.onclick = () => {
    leaderBoard.style.display = `block`;
}

leaderBoardClose.onclick = () => {
    leaderBoard.style.display = `none`;
}

// Functions

// Tippy - Menu
function menuFunction() {
    const template = document.querySelector(`#tippy-template`);
    template.style.display = `block`;
    tippy(`.setting`, {
        trigger: 'click',
        theme: 'translucent',
        // placement: 'left',
        allowHTML: true,
        interactive: true,
        content: template
    });
}
menuFunction();