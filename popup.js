const SENTENCES = [
    "請問月老廟在哪?",
    "say something!",
    "小精靈休假快樂嗎",
    "小精靈想轉職",
    "禁止喂食",
    "立志要當精靈王",
    "本精靈連假要睡！到！爽",
    "我絕對不露臉",
    "我家很大歡迎來我家玩",
    "有什麼願望小精靈都幫你實現",
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomText() {
    let index = getRandomInt(SENTENCES.length)
    return SENTENCES[index];
}

// Initialize button with user's preferred color
let text = document.getElementById("text");
text.innerText = getRandomText()