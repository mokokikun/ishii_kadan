$(function(){
  // ハンバーガー
  var $nav   = $('#navArea');
  var $navHumber   = $('#humberNav');
  var $mask  = $('#mask');
  // var open   = 'open';
  $('.btn-trigger').on('click', function() {
    if ( ! $nav.hasClass('open') ) {
      $navHumber.fadeIn(500);
      $nav.addClass('open');
      $(this).toggleClass('active');
    } else {
      $navHumber.fadeOut(500);
      $nav.removeClass('open');
      $(this).toggleClass('active');
    }
    return false;
  });
  // ヘッダー変化
  $(window).scroll(function(){
    if($(window).scrollTop() > 1){
      $('header').addClass('change-color');
      // $('header').slideToggle();
    }else{
      $('header').removeClass('change-color');
    }
  })

 
  // ①タブをクリックしたら発動
  $('.tab li').click(function() {
  
    // ②クリックされたタブの順番を変数に格納
    var index = $('.tab li').index(this);
  
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab li').removeClass('active');
  
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
  
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.information').removeClass('show').eq(index).addClass('show');
  
  });

  let swipeOption = {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  }
  new Swiper('.swiper-container', swipeOption);

  var calendar = document.getElementById('calendar');
  flatpickr.localize(flatpickr.l10ns.ja);
  var fp = flatpickr(calendar, {
    dateFormat: 'Y-n-j(l)',
    locale: "ja"
  });
  flatpickr('.flatpickr', {
    inline: 'true',
    locale: "ja",
  });

  var $modal   = $('.modal_book');
  var $m_mask  = $('#modal_mask');
  // pc-reserve
  $(".reserve").on('click', function() {
    if ( ! $modal.hasClass('modal-active') ) {
      $('.modal_book').addClass('modal-active');
      $nav.addClass('modal-open');
      $nav.addClass('open')
    } else {
      $modal.removeClass('modal-active');
      $nav.removeClass('modal-open');
      $nav.removeClass('open')
    }
    return false;
  });
// phone-reserve
  $("#reserve").on('click', function() {
    $navHumber.fadeOut(500);
    $nav.removeClass('open');
    $('.btn-trigger').toggleClass('active');
    
    $nav.addClass('modal-open');
    $('.modal_book').addClass('modal-active');
    $nav.addClass('open')
    return false;
  });

  $("#modal-close").on('click', function() {
    if ( ! $modal.hasClass('modal-active') ) {
      $('.modal_book').addClass('modal-active');
      $nav.addClass('modal-open');
      $nav.addClass('open')
    } else {
      $modal.removeClass('modal-active');
      $nav.removeClass('modal-open');
      $nav.removeClass('open')
    }
    return false;
  });


});