$(document).ready(() => {
  // Offset Fixed Navigation
  $('#hero-section .menu-links a, .mobile-links a, .btn-prime').click((e) => {
    const linkTarget = $(e.currentTarget).attr('href');

    if (linkTarget === '#' || linkTarget.charAt(0) !== '#') {
      return;
    }
    e.preventDefault();

    let topOffset = $(linkTarget).offset().top;
    let navContainer = '.top-fixed';
    if ($('.mobile-nav').is(':visible')) {
      if ($('#burger').is(':checked')) {
        navContainer = '.mobile-menu input~nav';
        $('#burger').trigger('click');
      }
    }

    topOffset -= $(navContainer).height();

    $('html, body').animate({
      scrollTop: topOffset,
    }, 900);
  });

  $('#section-btn button').click(function (e) {
    e.preventDefault();
    $('#section-btn button').removeClass("active");
    $(this).addClass("active");
  });

  $('#mobile-faq').change(function (e) {
    e.preventDefault();
    var selected = $('#mobile-faq').val();
    $('#' + selected).trigger('click');
  });

  var shopifyVariant = {};
  shopifyVariant.monthly_srt = 28425641552;
  shopifyVariant.monthly_hrt = 28425641616;
  shopifyVariant.monthly_bundle = 28425641680;
  shopifyVariant.yearly_srt = 28433203344;
  shopifyVariant.yearly_hrt = 28433203408;
  shopifyVariant.yearly_bundle = 28433203472;
  $("#add-to-cart-btn").click(function (e) {
    e.preventDefault();
    var planFrequency = $('#payment-frequency').val();
    var bookType = $('#book-type').val();
    window.location.href = "https://www.shopshereadstruth.com/cart/add?id=" + shopifyVariant[planFrequency + '_' + bookType];
    // console.log("https://www.shopshereadstruth.com/cart/add?id=" + shopifyVariant[planFrequency + '_' + bookType]);

  })

});