window.onload = function () {
  // Hide blocks

  function hideShow(btn, cont, container) {
    document.getElementById(btn).addEventListener("click", () => {
      document.getElementById(cont).style.display = "none";
      document.getElementById(container).style.display = "block";
    });
  }

  hideShow("btn00", "cont0", "cont1");
  hideShow("btn11", "cont1", "cont2");
  hideShow("btn22", "cont2", "cont3");
  hideShow("btn33", "cont3", "cont4");
  hideShow("btn44", "cont4", "cont5");

  // Remember picked items

  function choice(choiceWrap, htmlLi, htmlInput) {
    document.querySelector(choiceWrap).addEventListener("click", function () {
      let btn = document.getElementsByClassName("choice__item");

      if (event.target.classList[0] == "choice__item") {
        for (let i = 0; i < btn.length; i++) {
          btn[i].classList.remove("btn_active");
        }
        event.target.classList.add("btn_active");
      }

      let tagged = document.querySelector(".btn_active");
      let taggedName = tagged.value;

      let li = document.querySelector(htmlLi);
      li.innerHTML = taggedName;
      let input = document.querySelector(htmlInput);
      input.value = taggedName;
    });
  }

  choice(".choice_wrap", "#li", "#input1");
  choice(".choice_wrap_2", "#li2", "#input2");
  choice(".choice_wrap_3", "#li3", "#input3");
  choice(".choice_wrap_4", "#li4", "#input4");
};
