class testimonials =[
{
    name:"Nelson Mandela",
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    color:"CDF0EA",
}
{
    name:" Walt Disney.",
    quote:"The way to get started is to quit talking and begin doing.",
    color:"F9F9F9",
}

{
    name:"Eleanor Roosevelt",
    quote:"If life were predictable it would cease to be life, and be without flavor.",
    color:"F6C6EA",
}

{
    name:"John Lennon",
    quote:"Life is what happens when you're busy making other plans.",
    color:"FAF4B7",
}

{
    name:"Franklin D. Roosevelt",
    quote:"When you reach the end of your rope, tie a knot in it and hang on.",
    color:"F47C7C",
}
]

//Truy cập vào các thành phần
const testimonialsContainer = document.querySelector(".testimonials-container");
const textEl = document.querySelector(".text");
const nameRl = document.querySelector(".name");
const authors = document.querySelector(".authors-container");

//Lắng nghe sự kiện
authors.forEach(authors => {
    authors.addEventListener(`click`, function(){
        // Trước khi thêm vào --> xóa hết các class "selected" đi
        Array.from(authors).map(e => e.classList.remove("selected"));

        // HighLight tác giả (thêm class "selected" vào authỏ đang được click)
            authors.classList.add("selected");

        //Render ra thông tin của author đang được chọn
        renderTestimanial(index);

    })
});





