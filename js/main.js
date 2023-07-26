// HEADER 검색 버튼 focus시 이벤트 효과 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  searchInputEl.setAttribute('value', '');
});


// HEADER 오른쪽 배재 스크롤시 숨겨지는 애니메이션 
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼보이기
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block' 
    });
    //버튼 숨기기
    gsap.to(toTopEl, .3, {
      x: 100
    })
  }
}, 300));


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});


// VISUAL 이미지가 순차적으로 보여지는 애니메이션 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// Swiper - 공지사항
new Swiper('.notice-line .varticalSwiper', {
  direction :'vertical', 
  autoplay: true,
  loop: true,
});


// Swiper - 스타벅스 프로모션
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 여백 
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination:{
    el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

// 하단 슬라이드
new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEL = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion  // ! 특정 변수의 값을 반대로 반환한다
  if (isHidePromotion) {
    // 숨김처리
    promotionEL.classList.add('hide');
  } else {
    // 보임처리
    promotionEL.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMasic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook:.8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// 올해 몇년도 인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();