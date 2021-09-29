let mainBody = document.getElementsByTagName('body')[0];
let dark = document.getElementById('dark-change')

dark.addEventListener('click', function(){
    dark.classList.toggle('active');
    mainBody.classList.toggle('light');
});

const menuBtn = document.querySelector('.menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('open');
    menuBar.classList.toggle('barOpen');
});


let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


    const openModal = document.querySelector('.bi-play');
    const Modal = document.querySelector('.mYmodal');

    const Modal2 = document.querySelector('.mYmodal2');
    const closeModal = document.querySelector('.bi-x-square');

    openModal.addEventListener('click', ()=>{
        openModal.classList.remove('bi-play');
        openModal.classList.add('bi-pause')
        Modal.classList.toggle('openModal');
        console.log(Modal);
    })
    closeModal.addEventListener('click', ()=>{
        Modal.classList.remove('openModal');
    })



(function ($) {

        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    