//quiz

function quizF() {
    const cake = document.getElementById("answer");
    cake.innerHTML = `<p>prawie dobrze</p><h2><i class="fas fa-thumbs-down"></i></h2><p>spróbuj jeszcze raz</p>`
};

function quizT() {
    const cake = document.getElementById("answer");
    cake.innerHTML = `<p>SUPER</p><h2><i class="fas fa-thumbs-up"></i>
    <i class="fas fa-bug"></i>
    </h2><img src="images/gabriel-gabriel-4HXOzHQInPw-unsplash.jpg" alt="fly"><p>to niestety prawda</p>`
};

//moving shodow on the page title - depending on the mousemove
const pageTitle = document.querySelector('.page-title');
const text = pageTitle.querySelector('.main-title');
const shadowLength = 150;

function shadow(event) {
    const {offsetWidth: width, offsetHeight: height } = pageTitle;
    let { offsetX: x, offsetY: y} = event;
 
    if(this !== event.target) {
        x = x + event.target.offsetLeft - this.offsetLeft;
        y = y + event.target.offsetTop - this.offsetTop;
    };

    const shadowLengthX = Math.round(( x/width * shadowLength) - (shadowLength/2));
    
    const shadowLengthY = Math.round(( y/height * shadowLength) - (shadowLength/2));

    text.style.textShadow = `${shadowLengthX}px ${shadowLengthY}px 0 rgba(0,0,0,0.67)`
}

pageTitle.addEventListener("mousemove", shadow);