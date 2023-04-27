const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

//TITLE
const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "RSS Virtual keyboard";
wrapper.append(title);

//TEXT AREA
const textArea = document.createElement("textarea");
textArea.classList.add("text-area");
wrapper.append(textArea);

//KEYBORD
const keyBoard = document.createElement("div");
keyBoard.classList.add("key-board");
wrapper.append(keyBoard);

//KEYBORD wrapper for keys
const keyBoardKeys = document.createElement("div");
keyBoardKeys.classList.add("key-board__keys");
keyBoard.append(keyBoardKeys);

//KEY
const key = document.createElement("button");
key.setAttribute("type", "button");
key.classList.add("key-board__key");
key.textContent = "a";
keyBoardKeys.append(key);
