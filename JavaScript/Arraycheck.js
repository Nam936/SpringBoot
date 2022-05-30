// Bai 1
document.write(`<h1 style = background-color:green>Bài 1 </h1>`);
function CheckElemenExist(element,array){
  let count = 0;
  for(let i = 0; i <= array.length; i++){
       if(array[i] === element) {
            count ++;
            break;
       }
  }
  return (count > 0) ? true : false;
}
let array = [1,2,3,4,5];
document.write(CheckElemenExist(2,array));


//Bai 2
document.write(`<h1 style = background-color:green>Bài 2 </h1>`);
function getElementGreater(element,array){
    let array1 = [];
    for(let i = 0; i <= array.length; i++){
        if(array[i] > element){
            array1.push(array[i]);
        }
        // else
        //     return "khong co gia tri lon hon "+ element;
    }
    return array1;
}
document.write(getElementGreater(2,[1,2,3,4,5]));


//BAI 3
document.write(`<h1 style = background-color:green>Bài 3 </h1>`);
function RandomHex(letters,color) {
   
    for (let i = 0; i < 4; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return "Hex Random: "+ color;
  }

  document.write(RandomHex('728a98','#'))
