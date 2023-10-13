const toast_box = document.querySelector(".toast_box");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {

    let div = document.createElement("div");
    div.classList.add("toast");

    // Success

    if (e.target.textContent === "Success") {
      div.classList.add("success");
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-circle-check");
      div.appendChild(i);

      let span = document.createElement("span");
      span.textContent = "Successfully Submited.";
      div.appendChild(span);

      toast_box.appendChild(div);
    }

    // Error
    if (e.target.textContent === "Error") {
      div.classList.add("error");
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-circle-xmark");
      div.appendChild(i);

      let span = document.createElement("span");
      span.textContent = "Error! Occured Resolve it.";
      div.appendChild(span);

      toast_box.appendChild(div);
    }

    // Invalid

    if (e.target.textContent === "Invalid") {
      div.classList.add("invalid");
      let i = document.createElement("i");
      i.classList.add("fa-solid", "fa-circle-exclamation");
      div.appendChild(i);

      let span = document.createElement("span");
      span.textContent = "Invalid Property.";
      div.appendChild(span);

      toast_box.appendChild(div);
    }

    setTimeout(() => {
      div.remove();
    }, 2000);

        // removing_msgs more than 3
        if (toast_box.children.length >= 4) {
            toast_box.removeChild(toast_box.children[0]);
          }
  });
});
