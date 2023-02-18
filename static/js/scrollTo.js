const EventEls = document.querySelectorAll('.scrollEl')

window.addEventListener('DOMContentLoaded', (event) => {
    const _html = document.querySelector('html');
    _html.style.scrollBehavior = "smooth";

    Array.from(EventEls).forEach(element => {
        element.addEventListener('click', (event) => {
            const y = document.querySelector('#'+element.getAttribute('name')).getBoundingClientRect().top + window.scrollY;
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
            // document.querySelector('#'+element.getAttribute('name')).scrollIntoView(true, { 
            //     behavior: "smooth", 
            //     block: "top", 
            //     inline: "start"
            // });
          });
    });

})