burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

var img = document.getElementById("img")
        var images = ["images/bus1.jpg","images/bus2.jpg","images/bus3.jpg","images/bus4.jpg","images/bus5.jpg"]
        var index = 0
        function next() {
            if (index == images.length - 1)
                index = 0
            else
                index++
            img.src = images[index]
        }  
        function previous(){
            if(index==0)
            index = images.length-1
            else
            index--
            img.src = images[index]
        }
        var time = setInterval(next,2000)
        var choice = 2
        function playPause(){
            if(choice==1){
                time = setInterval(next,2000)
                choice = 2  
            }
            else{
                clearInterval(time)
                choice = 1
            }
        }
            