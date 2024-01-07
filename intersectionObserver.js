const sectionOne = document.querySelectorAll('.card');
const sectionTwo = document.querySelector('.card2');

const options = {
    root:null ,// default (viewport)
    threshold: 0, // 0 -> 1 specifies the pescentage of ele visible
    rootMargin: "-150px" //viewport will be shrinked by -150px 
}

const observer = new IntersectionObserver(function (entries,observer) {
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return ;
        console.log(entry.target);
        console.log(observer);
        observer.unobserve(entry.target) // observe only once
    })
},options)

// sectionOne.forEach(ele=>observer.observe(ele));
observer.observe(sectionTwo);