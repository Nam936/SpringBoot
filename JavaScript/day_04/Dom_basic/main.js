const heading = document.getElementById("heading");
console.log(heading);

const parastagName = document.getElementsByTagName("p");
console.log(parastagName);

// // Array.from(parasClassName) = document.getElementsByClassName("para");



const paras1 = document.querySelector("p");
console.log(paras1);
const paras2 = document.querySelector("para:nth-child(3)");
console.log(paras2);
const paras3 = document.querySelector(".para + .para");
console.log(paras3);


const ul1 = document.querySelector("body > ul");
console.log(ul1);

const parsasSellectorAll = document.querySelectorAll("p");
console.log(parsasSellectorAll);


//thay doi css
heading.style.color = "red";

const box = document.querySelector(".box");
console.log(box.parentElement);
const box1 = document.querySelector(".box");
console.log(box1.previousSibling);

//them phan tu vao dom

// document.body.prepend(paras1);
// document.body.appendChild(paras1);
// document.body.insertBefore(paras1, box);

// Tao phan tu dom
const link = document.createElement("a");
link.innerText = "Link Google";
link.href = "http://google.com";
console.log(link);

const li = document.createElement("li");
li.innerText = "hello";
const li3 = document.querySelector("body > ul li:nth-child(3)");
console.log(li3);

// Them phan tu
// box.insertAdjacentElement("afterend, paras1");
heading.insertAdjacentHTML("afterend","<button>Click me</button>");
box.insertAdjacentHTML("afterbegin", "<p>Xin chao toi la the moi duoc tao</p>" );

// Xoa phan tu

//copy
const boxCopyTrue = document.querySelector(".box");








