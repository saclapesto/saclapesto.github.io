document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        document.querySelector('.About'),
        document.querySelector('.Features'),
        document.querySelector('.contact')
    ];

    function revealOnScroll() {
        const scrollY = window.scrollY 
        const windowHeight = window.innerHeight; 

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top + scrollY; 
            if (scrollY + windowHeight > sectionTop + 10) { 
                section.classList.add('visible');
            }
            else{
                section.classList.remove('visible');
            }    
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});