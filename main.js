import "./style.css";

const hideOtherFAQ = (elements) => {
  elements.map();
};

function toggleFAQ() {
  const elements = Array.from(document.getElementsByClassName("faq-toggle"));

  elements.map((element) => {
    const toggleBtn = element.firstElementChild.lastElementChild;
    const answer = element.lastElementChild;

    toggleBtn.addEventListener("click", () => {
      if (answer.classList.contains("hide-faq")) {
        answer.classList.remove("hide-faq");
      } else if (!answer.classList.contains("hide-faq")) {
        answer.classList.add("hide-faq");
      }
    });
  });

  console.log(elements[0]);
  console.log(elements[0].firstElementChild.lastElementChild);
  console.log(elements[0].lastElementChild);
}

toggleFAQ();
