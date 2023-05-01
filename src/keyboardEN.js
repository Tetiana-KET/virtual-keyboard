function keyboardEnInit () {
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
  textArea.setAttribute("value", "");
  wrapper.append(textArea);

  //KEYBORD
  const keyBoard = document.createElement("div");
  keyBoard.classList.add("key-board");
  wrapper.append(keyBoard);
  
  //KEYBORD wrapper for keys
  const keyBoardKeys = document.createElement("div");
  keyBoardKeys.classList.add("key-board__keys-container");
  keyBoard.append(keyBoardKeys);
  
  //value for text area
  let value = "";
  //caps
  let caps = false;

  //KEY
  let keys = [];
  const keyList = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", "del",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "▲", "Shift",
    "Ctrl", "win", "Alt", "space", "Alt", "◄", "▼", "►", "Ctrl"
  ];

  const letters = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", 
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
    "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "▲",
    "◄", "▼", "►",
  ];

  const specialKeys = ["Backspace", "Tab", "del", "CapsLock", "Enter", "Shift", "Ctrl", "win", "Alt", "space", "▲",
    "◄", "▼", "►"
  ];

  keyList.forEach((elem, i, arr) => {
    const specialKeys = ["Backspace", "Tab", "del", "CapsLock", "Enter", "Shift", "Ctrl", "win", "Alt", "space", "▲",
      "◄", "▼", "►"
    ].indexOf(elem) !== -1;

    const widerKeys = ["CapsLock", "Enter", "Shift"].indexOf(elem) !== -1;

    const key = document.createElement("button");
    key.setAttribute("type", "button");
    key.setAttribute("data", `${elem}`);
    key.classList.add("key-board__key");
    key.textContent = arr[i];
    keyBoardKeys.append(key);

    if (specialKeys) {
      switch(elem) {
      case "▲": key.setAttribute("data", "ArrowUp");
        break;
      case "◄": key.setAttribute("data", "ArrowLeft");
        break;
      case "▼": key.setAttribute("data", "ArrowDown");
        break;
      case "►": key.setAttribute("data", "ArrowRight");
        break;
      case "del": key.setAttribute("data", "Delete");
        break;
      case "space": key.setAttribute("data", " ");
        break;
      case "win": key.setAttribute("data", "Meta");
        break;
      case "Ctrl": key.setAttribute("data", "Control");
        break;
      }
    }
    if (specialKeys) {
      key.classList.add("key-board__key_special");
    }
    if (elem === "del") {
      key.classList.add("key-board__key_wide");
    }
    if (elem === "Tab") {
      key.classList.add("key-board__key_wide");
      key.addEventListener("click", () => {
        value += "\t";
      });
    }
    if (widerKeys) {
      key.classList.add("key-board__key_wider");
    }
    if (elem === "space") {
      key.classList.add("key-board__key_extra-wide");
      key.addEventListener("click", () => {
        value += " ";
      });
    }
    if (elem === "Backspace") {
      key.classList.add("backspace");
      key.addEventListener("click", () => {
        value = value.substring(0, value.length - 1);
      });
    }
    if(elem === "CapsLock") {
      key.classList.add("key-board__key_caps");
      key.addEventListener("click", () => {
        key.classList.toggle("key-board__key_active-caps");
        caps = !caps;

        keys = document.querySelectorAll(".key-board__key");
        for (const key of keys) {
          if (!key.classList.contains("key-board__key_special")) {
            key.textContent = caps ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
          }
        }
      });
    }
    if (elem === "Enter") {
      key.addEventListener("click", () => {
        value += "\n";
      });
    }
    key.addEventListener("click", (e) => {
      if (letters.includes(e.target.textContent.toLowerCase())) {
        value += caps ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
      textArea.value = value; 
    });
  });

  keys = document.querySelectorAll(".key-board__key");

  function deleteClassActive () {
    setTimeout(()=>{
      keys.forEach((elem) => {
        elem.classList.remove("active");
      });
    }, 300);
  }

  function toggleActive (e) {
    e.target.classList.add("active");
    deleteClassActive();
  }

  keys.forEach((elem) => {
    elem.addEventListener("click", toggleActive);
  });

  document.onkeydown = function (event) {
    //TOGGLE ACTIVE
    keys.forEach((elem) => {
      if(event.key.toLowerCase() === elem.textContent.toLowerCase()) {
        elem.classList.add("active");
        deleteClassActive();
      } 
      if ((specialKeys.includes(elem.textContent))) {
        if (event.key === elem.getAttribute("data")) {
          elem.classList.add("active");
          deleteClassActive();
        }
      }
    });
    
    if (event.key === "Enter") {
      value += "\n";
    }
    if (event.code === "Space") {
      value += " ";
    }
    if (event.key === "Backspace") {
      value = value.substring(0, value.length - 1);
    }
    if (event.key === "Tab") {
      value += "\t";
    }
    
    //ARROWS
    if (event.key === "ArrowUp") {
      value += "▲";
    }
    if (event.key === "ArrowLeft") {
      value += "◄";
    }
    if (event.code === "ArrowDown") {
      value += "▼";
    }
    if (event.key === "ArrowRight") {
      value += "►";
    }
    
    //CAPSLOCK
    if(event.key === "CapsLock") {
      caps = !caps;
      for (const key of keys) {
        if (key.getAttribute("data") === "CapsLock") {
          key.classList.toggle("key-board__key_active-caps");
        }
      }
    
      keys = document.querySelectorAll(".key-board__key");
      for (const key of keys) {
        if (!key.classList.contains("key-board__key_special")) {
          key.textContent = caps ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
      }
    }
    // LETTERS
    if (letters.includes(event.key.toLowerCase())) {
      value += caps ? event.key.toUpperCase() : event.key.toLowerCase();
    }

    textArea.value = value; 
  };
}
export {keyboardEnInit};