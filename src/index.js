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