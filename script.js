const background = document.getElementById('background-text')
const main = document.getElementById('main')
const mediaQuery = window.matchMedia('(max-width: 600px)')
const imgSize = document.querySelector('img')


var ipsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, consequatur."
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
      for(let i=0 ; i<50; i++)
    {
    background.innerHTML +=ipsum
    
    }
    imgSize.height = '9rem'
  }
  else{
      for(let i=0 ; i<100; i++)
    {
    background.innerHTML +=ipsum
    imgSize.height = '20rem'
    }
  }
}


// Nav scrolling effect
const mainNav = document.querySelector('.main-nav');
const changeTextColor = document.querySelectorAll('.changeTextColor')
const aboutSection = document.querySelector('.about')
const sections = document.querySelectorAll('.section')
const navMenu = document.querySelectorAll('.nav-menu ul li a')
window.addEventListener('scroll' , ()=>{
    fixNav();
    changeNavMenuColor();
    
    
})

function changeNavMenuColor(){
  let current = ''
  sections.forEach((section)=>{
      // console.log(section.clientTop);
      // console.log(section.clientHeight);
      // console.log(section.offsetHeight);
      // console.log(window.scrollY);
      // console.log(pageYOffset);
      // console.log(section.offsetTop);
      
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(window.scrollY+500 >= sectionTop){
        current = section.getAttribute('id')
      }
    })
    navMenu.forEach((list)=>{
      list.classList.remove('active')
      if(list.classList.contains(current)){
        list.classList.add('active') 
      }
    })

}


function fixNav(){
    if(window.scrollY > mainNav.offsetHeight)
    {
      mainNav.classList.add('navBg')
      changeTextColor.forEach((item)=>{
        item.classList.add('textColor')
      })
        
    }
    else{
        mainNav.classList.remove('navBg')
        changeTextColor.forEach((item)=>{
        item.classList.remove('textColor')
      })
    }
  // console.log(window.scrollY,aboutSection.offsetHeight);
  }





// select active menu



mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)



