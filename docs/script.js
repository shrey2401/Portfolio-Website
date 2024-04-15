let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
      });
    }
  });
};
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const form = document.querySelector('form')
const Fullname = document.getElementById('name')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phone')
const msg = document.getElementById('message')
const subject = document.getElementById('subject')


function sendEmail(){
  const bodymsg = `Full Name : ${Fullname.value}<br> Email : ${email.value}<br>Phone Number : ${phoneNum.value}<br>Subject : ${subject.value}<br>  Message : ${msg.value}<br>`

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "shrey0107@gmail.com",
    Password : "A78756FE5B5F0BA9EEC83C5A510CD86F47E0",
    To : 'shrey0107@gmail.com',
    From : "shrey0107@gmail.com",
    Subject : subject.value,
    Body : bodymsg
  }).then(
  message => {
    if(message == "OK"){
      Swal.fire({
        title: "Success!",
        text: "Your message has been Sent",
        icon: "success"
      });
    }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
})