const tabBorder = document.getElementById('tab-border')
const tabTitle = document.querySelectorAll('.tabs')
const containerHidden = document.querySelectorAll('.container-hidden')



tabTitle.forEach(tab => {
    tab.addEventListener("click", () => {
            remove()
            tab.classList.add('active')  
    })
})

function remove() {
    [].forEach.call(tabTitle, function(e) {
        e.classList.remove("active");
    });
}

function showStuff(element)  {
    let tabContents = document.getElementsByClassName('tab-section');
    for (let i = 0; i < tabContents.length; i++) { 
        tabContents[i].style.display = 'none';
    }
    let tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
    document.getElementById(tabContentIdToShow).style.display = 'block';
}

containerHidden.forEach(question => {
    question.addEventListener('click', () => {
        const faq = question.nextElementSibling
        const icon = question.children[1]

        faq.classList.toggle('show')
        icon.classList.toggle('rotate')

        
    })
})

function checkEmail() {

    const email = document.querySelector('.email');
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}


const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})










