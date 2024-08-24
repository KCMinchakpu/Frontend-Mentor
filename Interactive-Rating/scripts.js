const form = document.querySelector("[info-js-form]");
const template = document.querySelector("[info-js-template]");
const wrapper = document.querySelector("[info-js-wrapper]");


function handleSubmit(event) {
    event.preventDefault();

    const rating = new FormData(event.target).get("rating");

    if (rating) {
        wrapper.addEventListener("animationend", () =>{
        wrapper.innerHTML = template.innerHTML.replace(/{{rating}}/, rating);
        wrapper.classList.replace("animate-out", "animate-in");
        },
        {
            once: true,
        }
    );
        playSound();
        wrapper.classList.add("animate-out");
        wrapper.style.height = wrapper.offsetHeight + "px";
        
    }
}

function playSound(){
    const audio = new Audio("./sounds/whoosh.mp3");
    audio.volume = 0.2;
    audio.play();
}



form.addEventListener("submit", handleSubmit);