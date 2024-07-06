//toggle icon navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=> { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// scroll section aactive link 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('neader nav a');

window.onscroll = () => {
    section.forEach(sec =>
        {
            let top= window.scrollY;
            let offset = sec.offsetTop-150;
            let height = sec.getAttribute('id');

            if(top>= offset && top<offset+height){
                navLinks.forEach(links=>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        }); 

        let header=document.querySelector('header');
         header.classList.toggle('sticky', window.scrollY > 100 );


        // remove toggle icon and navbar when click navbar

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

};
// scroll reveal


ScrollReveal(
    {
        reset: true,
        distance:'80px',
        duration:2000,
        delay : 200
    }
);

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:
    'bottom'});
    ScrollReveal().reveal('.home-content h1,.about-img ',{origin:'left'});
    ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});


    const typed = new Typed('.multiple-text',{
        strings:['frontend developer','youtuber','blogger'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true

    });

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
