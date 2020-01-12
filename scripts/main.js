document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

var isDarkMode = true;

function themeSwitch(){
    if(isDarkMode){
        trans();
        isDarkMode = false;
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('en-us').setAttribute('src', 'images/usukflagonwhite.png');
        document.getElementById('hu').setAttribute('src', 'images/huflagonwhite.png');
        document.getElementById('githubicon').setAttribute('src', 'images/blackgithub.png');
        document.getElementById('themebutton').setAttribute('src', 'images/moon.png');
    }else{
        trans();
        isDarkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('en-us').setAttribute('src', 'images/usukflagonblack.png');
        document.getElementById('hu').setAttribute('src', 'images/huflagonblack.png');
        document.getElementById('githubicon').setAttribute('src', 'images/whitegithub.png');
        document.getElementById('themebutton').setAttribute('src', 'images/sun.png');
    }
}

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

function contactMenu(){
    document.querySelector('.bg-modal').style.display = 'flex';
}

function exitContactMenu(){
    document.querySelector('.bg-modal').style.display = 'none';
}

function sendMessage(){
    
}