const btn = document.querySelector(".btn");
const button = document.querySelectorAll(".button");
const content = document.querySelectorAll(".content");

btn.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {

        button.forEach(function (button) {
            button.classList.remove("live");
        });
        e.target.classList.add("live");

        content.forEach(function (article) {
            article.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});