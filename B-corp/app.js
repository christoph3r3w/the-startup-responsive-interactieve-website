const counters = document.querySelectorAll('.value');
const speed = 2000;
let body = document.querySelector('body')
let root = document.querySelector(':root')
let darkBtn = document.querySelector('.dark')


counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 70);
        }else{
          counter.innerText = value;
        }
     
   }
   
   
   animate();
});


 darkBtn.addEventListener('click',(e)=>{

  root.classList.toggle('darkmode')
  body.classList.toggle('darkmode')
  //alert('yes')
 })