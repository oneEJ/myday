const quotes = [
    {
        quote: "네가 생각날 때면 I stay up all night",
        author: "밤새",
    },
    {
        quote: "뒤돌아봐도 Umm umm 나 있어, 겁먹지 말아 줘 Um um",
        author: "GALAXY",
    },
    {
        quote: "완벽하기 전에 우린 제일 위태로워",
        author: "LOVE ME",
    },
    {
        quote: "내일부터 우리 서로를 부를 때 기대가 되지 스치듯 뱉는 말도 나를 미치게 해 넌",
        author: "I'm in Trouble",
    },
    {
        quote: "습관이란 게 무섭긴 한가 봐 눈만 뜨면 네 흔적부터 찾아",
        author: "WHERE YOU AT",
    },
    {
        quote: "우리뿐인 새벽 3시",
        author: "DRIVE",
    },
    {
        quote: "너에 대한 모든 게 꿈이라고 생각해 좋은 꿈이었어 너도 그랬으면 좋겠어",
        author: "Back To Me (평행우주)",
    },
    {
        quote: "Ah, 흑백이던 나의 삶에 You",
        author: "Love Paint (every afternoon)",
    },
    {
        quote: "나는 너의 나는 네가 필요해",
        author: "Dejavu",
    },
    {
        quote: "내 마음은 자꾸 너에게 달려가",
        author: "INSIDE OUT",
    },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.textContent = todayQuote.quote;
author.textContent = todayQuote.author;
