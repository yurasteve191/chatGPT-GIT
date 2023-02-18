//Анімує елементи DOM після появи їх у видимій зоні
//процес відбувається шляхом додавання класу scrl-show-acrive, який має бути прописаний в css.
//застосовується лише на елементи із класом scrl-show
const animItems = document.querySelectorAll(".scrl-show")
if (animItems.length > 0) {
  window.addEventListener('scroll', ScrlElShow);
  function ScrlElShow() {
    [...Array(animItems.length)].map((_,idx) => {
        const animItem = animItems[idx];
        const animItemHeight = animItem.offsetHeight*2;
        const animItemOffcet = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if(animItemHeight>window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffcet-animItemPoint) && pageYOffset < (animItemOffcet+animItemHeight)){
          console.log('wfdewf');
            animItem.classList.add('scrl-show-acrive')
        }else{
            animItem.classList.remove('scrl-show-acrive')
        }
    })
  }

  function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
setTimeout(() => {
  ScrlElShow();
}, 300);
}
