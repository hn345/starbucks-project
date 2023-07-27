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


// FOOTER 올해 몇년도 인지 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
