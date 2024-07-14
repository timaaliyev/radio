document.addEventListener("DOMContentLoaded", function () {
  // Аналог $(document).ready(function(){
  gsap.registerPlugin(ScrollTrigger);

  // Получаем все элементы списка
  const listItems = document.querySelectorAll("#myList li");

  // Устанавливаем начальные значения свойств элементов перед анимацией
  gsap.set(listItems, { opacity: 0, y: 100 });

  // Итерируемся по каждому элементу списка
  listItems.forEach((item, index) => {
    // Создаем анимацию для текущего элемента
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 90%", // Начало анимации, когда элемент находится на 80% высоты окна
        end: "bottom 50%", // Конец анимации, когда элемент остался на 20% высоты окна
        scrub: true, // Анимация привязана к прокрутке страницы
        toggleActions: "play none none reverse", // Определяет поведение анимации при прокрутке вперед и назад
      },
    });
  });
  const playlistItems = document.querySelectorAll("#playList li");

  // Устанавливаем начальные значения свойств элементов перед анимацией
  gsap.set(playlistItems, { opacity: 0, y: 100 });

  // Итерируемся по каждому элементу списка
  playlistItems.forEach((item, index) => {
    // Создаем анимацию для текущего элемента
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 90%", // Начало анимации, когда элемент находится на 80% высоты окна
        end: "bottom 50%", // Конец анимации, когда элемент остался на 20% высоты окна
        scrub: true, // Анимация привязана к прокрутке страницы
        toggleActions: "play none none reverse", // Определяет поведение анимации при прокрутке вперед и назад
      },
    });
  });
});
