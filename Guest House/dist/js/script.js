let btnNext = document.getElementById('btnNext'),
    btnPrevious = document.getElementById('btnPrevious'),
    slideFirst = document.querySelector('.guests__card_1'),
    slideSecond = document.querySelector('.guests__card_2'),
    slide = document.querySelector('.guests__card');

btnNext.addEventListener("click", function() {
    slideFirst.style.display = "none";
    slideSecond.style.display = "block";
});

btnPrevious.addEventListener("click", function() {
    slideSecond.style.display = "none";
    slideFirst.style.display = "block";
});