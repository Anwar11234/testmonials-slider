const prevBtn= document.querySelector('.prev');
const nextBtn= document.querySelector('.next');

const testmonials = document.querySelector('.testmonial');
const avatar = document.querySelector('.avatar');

const slides = [
    {
        src:'images/image-tanya.jpg',
        testmonial:` “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name:'Tanya Sinclair',
        job:'UX Engineer'
    },
    {
        src: 'images/image-john.jpg',
        testmonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name:'  John Tarkpor',
        job:'Junior Front-end Developer'
    }
];

function updateSlideContent( src ,testmonial , name , job){ 
    const html = `        
    <blockquote class="quote">
        ${testmonial}
    </blockquote>

    <div class="info">
        <span class="name">  ${name} </span>
        <span class="job">  ${job} </span>
    </div>`

    testmonials.innerHTML = html;
    avatar.src = src;
}


let currentSlideIndex = 0;

function updateSlide( direction){ 
    updateSlideIndex(direction);
    updateSlideContent(
        slides[currentSlideIndex].src , 
        slides[currentSlideIndex].testmonial , 
        slides[currentSlideIndex].name, 
        slides[currentSlideIndex].job
    );

}

function updateSlideIndex(direction){ 
    if(direction === 'forward') currentSlideIndex++;

    if(direction === 'backwards') currentSlideIndex--;

    if(currentSlideIndex >= slides.length) currentSlideIndex = 0;

    if(currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
}

function fadeIn(){ 
    testmonials.classList.add('fade-in');
    avatar.classList.add('fade-in');
    setTimeout(() => { 
         testmonials.classList.remove('fade-in');
        avatar.classList.remove('fade-in');
    }, 1000)
}

nextBtn.addEventListener('click' , () => { 
    updateSlide('forward')
    fadeIn();
});

prevBtn.addEventListener('click' , () => { 
    updateSlide('backwards')
    
        fadeIn();
    
})