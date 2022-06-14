// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const uEle = document.querySelector("#list");
const inputEl = document.querySelector("input");
const btnAdd = document.querySelector("btn-add");
const btrRemove = document.querySelector("btn-remove");

btnAdd.addEventListener(`click`, function(){
    //
    let value = inputEl.value;
    //
    if(value == ""){
        alert("Nội dung khong được để trống");
        return;
    }
    
} 


// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
btrRemove.addEventListener(`click`,function(){

    
})

// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”
