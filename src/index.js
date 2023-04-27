const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "RSS Virtual keyboard";
wrapper.append(title);