const quotes = [
    {
        quote: "간단함이 훌룡함의 열쇠이다.",
        author: "이소룡"
    },
    {
        quote: "바람이 불지 않으면 노를 저어라.",
        author: "윈스턴 처칠"
    },
    {
        quote: "산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다.",
        author: "공자"
    },
    {
        quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
        author: "마하트마 간디"
    },
    {
        quote: "해야할 일은 과감히 하라, 결심한 일은 반드시 실행하라.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "최대한의 삶을 살고, 최대한 긍적적인 것에 집중하자.",
        author: "매트 카메론"
    },
    {
        quote: "현재와 미래는 어떻게든 연결되어 있다.",
        author: "스티븐 잡스"
    },
    {
        quote: "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
        author: "카를로스 곤"
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
        author: "메이슨 쿨리"
    },
    {
        quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다",
        author: "허우일"
    }
]

const quote  = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// //Math.random()은 0과1 사이의 숫자를 출력
// //Math.floor()은 소수점을 생략하는 기능

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



