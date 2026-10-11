const portrait = document.querySelector(".portrait-wrapper");

const tags = document.querySelectorAll(".tech-tag");


portrait.addEventListener("mousemove", (event) => {

    const rect = portrait.getBoundingClientRect();

    const x =
        (event.clientX - rect.left) / rect.width - 0.5;

    const y =
        (event.clientY - rect.top) / rect.height - 0.5;


    tags.forEach((tag, index) => {

        const movement = (index + 1) * 2;

        tag.style.transform =
            `translate(${x * movement}px, ${y * movement}px)`;

    });

});


portrait.addEventListener("mouseleave", () => {

    tags.forEach(tag => {

        tag.style.transform = "";

    });

});
