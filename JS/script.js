
const accordions = document.querySelectorAll('.accordion-item');
// console.log(accordions);

for (item of accordions) { //пробегаем по nodelist(псевдомассив) циклом for of - цикл для псевдомассва
    item.addEventListener('click', function () { //если использовать стрелочную функцию, то мы потеряем this
        //console.log(this);
        //this.classList.toggle('active') // открываются все окошки одновременно, мы хотим что бы одно закрывалось при открытии другого

        if (this.classList.contains('active')) {  // если элемент на который мы щелкнули содержит класс active,
            this.classList.remove('active');      // то мы его удалим
        } else {                                  // если не содержит
            for (all of accordions) {             // то проверим циклом, содержит ли какой либо другой элемт такой класс
                all.classList.remove('active');   // если содержит, то удлим его
            }
            this.classList.add('active')          // затем добам класс actve такому элементу
        }
    })
}

