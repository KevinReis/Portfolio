const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun"); 
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("light")

})
window.addEventListener("load", () => {
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.add("fa-sun"); 
       }
       else 
       {
        dayNight.querySelector("i").classList.add("fa-moon")
       }

})