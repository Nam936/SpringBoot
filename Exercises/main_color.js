//Bai 1
const color = document.getElementById("text");
color.style.color = "#777";
color.style.fontSize = "2em"
color.innerHTML = "Tôi có thể làm<em> bất cứ điều gì</em> tôi muốn với javascript.";
// color.insertAdjacentHTML("afterbegin","Tôi có thể làm<em> bất cứ điều gì</em> tôi muốn với javascript.");
console.log(text);

//Bai 2
const ul1 = document.querySelector("body > ul");

for(let i = 0; i < ul1.clientHeight; i++){
    ul1.style.color = "orange";
    
}
console.log(ul1);



//Bai 3

const li8 = document.createElement("li");
li8.innerText = "Item 8";
const li9 = document.createElement("li");
li9.innerText = "Item 9";
const li10 = document.createElement("li");
li10.innerText = "Item 10"; 

const ul2 = document.getElementById("list");
ul2.insertAdjacentElement("beforeend",li8);
ul2.insertAdjacentElement("beforeend",li9);
ul2.insertAdjacentElement("beforeend",li10);

// 2

const li2 = document.querySelector("ul#list li:nth-child(1)").style.color="red";
// 3

const li3 = document.querySelector("ul#list li:nth-child(3)").style.backgroundColor="blue";
// 4

const li4 = document.querySelector("ul#list li:nth-child(4)");
const list = document.getElementById("list");
list.removeChild(li4);
// 5
const newEle = document.createElement("li");
const oldchild = document.querySelector("ul#list li:nth-child(4)");
newEle.innerText = "Tôi là thẻ mới";
list.replaceChild(newEle,oldchild);
console.log(ul2);










