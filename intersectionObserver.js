let thresHold = .5;
const observedEls = document.querySelectorAll('.classNAmeOfObservedElements(out)');
const observer = new IntersectionObserver(elments =>{
    elements.forEach(el=>{
        if(el.isIntersecting){
            el.target.classList.add('classNAmeOfObservedElements(in)')
        }else{
            el.target.classList.remove('classNAmeOfObservedElements(out)')
        }
    })
},{threshold: thresHold});
observedEls.forEach(el=>{observer.observe(el)});
