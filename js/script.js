$(function(){
    var swiper = new Swiper(".mainSwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /* var swiper1 = new Swiper(".notiSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
      clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1", */

      var swiper1 = new Swiper(".notiSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination1",
        type: "fraction",
        clickable: true,
        formatFractionCurrent: function (number) {
          return number < 10 ? '0' + number : number;
        },
        formatFractionTotal: function (number) {
          return number < 10 ? '0' + number : number;
        }
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",  
      },
    });
});


  $(document).ready(function () {
    // 초기에 무역사업 탭 콘텐츠만 보여주기
    $(".main_biz_front").show();
    $(".main_biz_back").hide();

    // 무역사업 탭 클릭
    $(".tabT1").on("click", function () {
      $(".tabT1").addClass("active");
      $(".tabT2").removeClass("active");

      $(".main_biz_front").fadeIn();
      $(".main_biz_back").fadeOut();

      // 스크롤 이동
      $("html, body").animate({
        scrollTop: $(".main_biz").offset().top
      }, 500); // 0.5초 동안 부드럽게 이동

    });

    // 제약사업 탭 클릭
    $(".tabT2").on("click", function () {
      $(".tabT2").addClass("active");
      $(".tabT1").removeClass("active");

      $(".main_biz_back").fadeIn();
      $(".main_biz_front").fadeOut();

      // 스크롤 이동
      $("html, body").animate({
        scrollTop: $(".main_biz").offset().top
      }, 500); // 0.5초 동안 부드럽게 이동

    });
    

    
    $(document).ready(function () {
  let selectedCategory = "total"; // 기본값: 전체

  // 드롭다운 열기/닫기
  $(".select-selected").on("click", function () {
    $(".select-items").slideToggle(200);
    $(this).toggleClass("open");
  });

  // 드롭다운 항목 선택
  $(".select-items li").on("click", function () {
    const selectedText = $(this).text();
    selectedCategory = $(this).data("value"); // 선택된 카테고리 업데이트

    $(".select-selected").html(`${selectedText} <span class="arrow">▾</span>`);
    $(".select-items li").removeClass("active");
    $(this).addClass("active");
    $(".select-items").slideUp(200);

    console.log("선택된 카테고리:", selectedCategory);
  });

  // 바깥 클릭 시 닫기
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".custom-select").length) {
      $(".select-items").slideUp(200);
      $(".select-selected").removeClass("open");
    }
  });

  // 검색 버튼 클릭
  $(".large-search__submit").on("click", function (e) {
    e.preventDefault();

    const keyword = $("#rightSearch").val().trim();

    if (keyword !== "") {
      const query = `/?s=${encodeURIComponent(keyword)}&tab_type=${selectedCategory}`;
      window.location.href = query;
    } else {
      alert("검색어를 입력해주세요.");
    }
  });
});
  });
