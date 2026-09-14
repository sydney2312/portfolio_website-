/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow = document.querySelector(".cursor-glow");


window.addEventListener("pointermove", (event) => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealItems = document.querySelectorAll(
    ".project, .about-heading, .about-content, .skill-row, .contact h2"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealItems.forEach((item) => {

    item.classList.add("reveal");

    observer.observe(item);

});



/* =========================================
   REVEAL ANIMATION
========================================= */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .reveal {

        opacity: 0;

        transform:
            translateY(22px);

        transition:
            opacity .7s ease,
            transform .7s ease;

    }


    .reveal.visible {

        opacity: 1;

        transform:
            translateY(0);

    }

`;


document.head.appendChild(revealStyle);



/* =========================================
   SMOOTH ANCHOR LINKS
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });