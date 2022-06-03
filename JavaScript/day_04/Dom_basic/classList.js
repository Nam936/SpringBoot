const heading = document.getElementById("heading");
console.log(heading.classList);

//Them Class
heading.classList.add("text-big","text-center");

//Xoa class
heading.classList.remove("text-big","text-center");

//Kiem tra 1 class ton tai trong class
console.log(heading.classList.contains("text-red"));
console.log(heading.classList.contains("text-big"));

// Toggle
setInterval(function(){
    heading.classList.toggle("text-red");
}, 1000 )// 1000 = 1s

// Dem nguoc thoi gian
const timeEl = document.querySelector(".time");
const textEL = document.querySelector(".text-hide");

let time = 10;

let interval = setInterval(function(){
    time--;
    timeEl.innerText = `${time}s`;
    if(time == 0){
        //Dung qua trinh dem nguoc
        clearInterval(interval);

        textEL.classList.remove("text-hide");
        timeEl.classList.add("text-hide");

    }
}, 1000 )// 1000 = 1s

