//BÀI 1
document.write(`<h1 style = background-color:green>Bài 1 </h1>`);
function factorial(num) {
    var gaithua =1;
    for(let i =1 ; i<=num; i++){
        gaithua = gaithua * i;
    }
    document.write(`Giai thừa của ${num} là: `+gaithua);
}
factorial(5);

//BÀI 2
document.write(`<h1 style = background-color:green>Bài 2 </h1>`);
function reverseString(str) {
    var String = "";
    for (var i = str.length - 1; i >= 0; i--) {
        String += str[i];
    }
    document.write(`String reverse: ` +String);
}
reverseString('hello');

//BÀI 3
document.write(`<h1 style = background-color:green>Bài 3 </h1>`);
function translate(str){
    switch(str){
        case `VN`:
            document.write(`Xin Chào`);
            break;
        case `EN`:
            document.write(`Hello`);
            break;
        case `FR`:
            document.write(`Salut`);
            break;    
        case `GR`:
            document.write(`γεια`);
            break; 
        case `DE`:
            document.write(`hallo`);
            break; 
        default:
            document.write(`Không có mã quốc gia tương ứng!`);
            break;        

    }
}translate(`DE`);

//BÀI 4
document.write(`<h1 style = background-color:green>Bài 4 </h1>`);
function stringMethod(mainString) {

    var subString = mainString.slice(0, 15);
    var end = " ...";
    if (mainString != null) {
      document.write(`Chuỗi sau khi cắt: `+ subString+end);
    }
  }
stringMethod(`xinchaocacbandenvoiTechmaster`);


   