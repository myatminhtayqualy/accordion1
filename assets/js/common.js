// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

const headers = document.querySelectorAll('.accordion-header');


headers.forEach(header => {
     header.addEventListener('click',function(){
        const content = this.nextElementSibling;
        const icon = header.querySelector('.headertext');

        icon.classList.toggle('newicon');
 
        content.classList.toggle('show');
      
       
     });  
});


// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });
});
