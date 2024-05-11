const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const minute=parseInt(document.querySelector('#min').value);
    const second=parseInt(document.querySelector('#sec').value);
    const time=document.querySelector('.time')
    console.log(minute,second)
    console.log(time)
    time.innerHTML='hello'
})
console.log("welcome to console");