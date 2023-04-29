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
keyBoardKeys.classList.add("key-board__keys-container");
keyBoard.append(keyBoardKeys);

//KEY
const keyList = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
  "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", "del",
  "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
  "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "", "Shift",
  "Ctrl", "win", "Alt", "space", "Alt", "", "", "", "Ctrl"
];

keyList.forEach((elem, i, arr) => {
  const specialKeys = ["backspace", "Tab", "del", "CapsLock", "Enter", "Shift", "Ctrl", "win", "Alt", "space"].indexOf(elem) !== -1;
  const widerKeys = ["CapsLock", "Enter", "Shift"].indexOf(elem) !== -1;

  const key = document.createElement("button");
  key.setAttribute("type", "button");
  key.classList.add("key-board__key");
  key.textContent = arr[i];
  keyBoardKeys.append(key);

  if (specialKeys || elem === "") {
    key.classList.add("key-board__key_special");
  }
  if (elem === "Tab" || elem === "del") {
    key.classList.add("key-board__key_wide");
  }
  if (widerKeys) {
    key.classList.add("key-board__key_wider");
  }
  if (elem === "space") {
    key.classList.add("key-board__key_extra-wide");
  }
  if (elem === "backspace") {
    key.classList.add("backspace");
  }
  if(elem === "CapsLock") {
    key.classList.add("key-board__key_caps");
  }
});