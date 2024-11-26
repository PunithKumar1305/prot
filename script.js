const sideMenu=document . querySelector('#sideMenu');
const navbar=document.querySelector("nav");
const navlinks=document.querySelector("nav ul");

 
function open(){
    sideMenu.style.transform ='translateX(-16rem)';

}
function close(){
    sideMenu.style.transform='translateX(16rem)';

}
window.addEventListener('scroll',()=>{
    if(scrollY >50 ){
        navbar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-drakTheme','dark:shadow-white/20 ');
        navlinks.classList.remove('bg-white','shadow-sm','bg-opacity-50', 'dark:border','dark:border-white/50','dark:bg-transparent');   
    }
    else{
        navbar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-drakTheme','dark:shadow-white/20 ');  
        navlinks.classList.add('bg-white','shadow-sm','bg-opacity-50', 'dark:border','dark:border-white/50','dark:bg-transparent' );  

    }

}

)


//light mode
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark'))
    {
        localStorage.theme='dark'
    }else{
        localStorage.theme='light'
    }
  }


// https://mega.nz/file/IVxmjLJB#WWgaUKnHsoAJIsyOUk1BquwIamZh9mzOLn5-8YMPKsk

