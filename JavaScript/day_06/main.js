
    const para = document.querySelector("p");

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
    para.insertAdjacentHTML("afterend", `<a href="http://Facebook.com">Facebook</a>`);
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
    let content = para.innerText;
    let word = content.split(" ");

// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
    for(let i = 0; i < word.length ; i++){
        if(word[i].length >=8){
            word[i] = `<span style ="background-color: yellow" >${word[i]}</span>`
        }
    }

    para.innerHTML = word.join("");
    // document.body.insertAdjacentHTML("afterbegin",`<div> So tu : ${word.length}</div>`);
// Thay thế ký hiệu ? => 🤔, ! => 😲
    para.innerHTML = para.innerHTML.replaceAll("?","🤔");
    para.innerHTML = para.innerHTML.replaceAll("!","😲");