(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  // Offset Fixed Navigation
  $('#hero-section .menu-links a, .mobile-links a, .btn-prime').click(function (e) {
    var linkTarget = $(e.currentTarget).attr('href');

    if (linkTarget === '#' || linkTarget.charAt(0) !== '#') {
      return;
    }
    e.preventDefault();

    var topOffset = $(linkTarget).offset().top;
    var navContainer = '.top-fixed';
    if ($('.mobile-nav').is(':visible')) {
      if ($('#burger').is(':checked')) {
        navContainer = '.mobile-menu input~nav';
        $('#burger').trigger('click');
      }
    }

    topOffset -= $(navContainer).height();

    $('html, body').animate({
      scrollTop: topOffset
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
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQU07QUFDdEI7QUFDQSxJQUFFLDBEQUFGLEVBQThELEtBQTlELENBQW9FLFVBQUMsQ0FBRCxFQUFPO0FBQ3pFLFFBQU0sYUFBYSxFQUFFLEVBQUUsYUFBSixFQUFtQixJQUFuQixDQUF3QixNQUF4QixDQUFuQjs7QUFFQSxRQUFJLGVBQWUsR0FBZixJQUFzQixXQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsTUFBeUIsR0FBbkQsRUFBd0Q7QUFDdEQ7QUFDRDtBQUNELE1BQUUsY0FBRjs7QUFFQSxRQUFJLFlBQVksRUFBRSxVQUFGLEVBQWMsTUFBZCxHQUF1QixHQUF2QztBQUNBLFFBQUksZUFBZSxZQUFuQjtBQUNBLFFBQUksRUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLFVBQXBCLENBQUosRUFBcUM7QUFDbkMsVUFBSSxFQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLFVBQWhCLENBQUosRUFBaUM7QUFDL0IsdUJBQWUsd0JBQWY7QUFDQSxVQUFFLFNBQUYsRUFBYSxPQUFiLENBQXFCLE9BQXJCO0FBQ0Q7QUFDRjs7QUFFRCxpQkFBYSxFQUFFLFlBQUYsRUFBZ0IsTUFBaEIsRUFBYjs7QUFFQSxNQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIsaUJBQVc7QUFEVyxLQUF4QixFQUVHLEdBRkg7QUFHRCxHQXRCRDs7QUF3QkEsSUFBRSxxQkFBRixFQUF5QixLQUF6QixDQUErQixVQUFVLENBQVYsRUFBYTtBQUMxQyxNQUFFLGNBQUY7QUFDQSxNQUFFLHFCQUFGLEVBQXlCLFdBQXpCLENBQXFDLFFBQXJDO0FBQ0EsTUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQjtBQUNELEdBSkQ7O0FBTUEsSUFBRSxhQUFGLEVBQWlCLE1BQWpCLENBQXdCLFVBQVUsQ0FBVixFQUFhO0FBQ25DLE1BQUUsY0FBRjtBQUNBLFFBQUksV0FBVyxFQUFFLGFBQUYsRUFBaUIsR0FBakIsRUFBZjtBQUNBLE1BQUUsTUFBTSxRQUFSLEVBQWtCLE9BQWxCLENBQTBCLE9BQTFCO0FBQ0QsR0FKRDs7QUFNQSxNQUFJLGlCQUFpQixFQUFyQjtBQUNBLGlCQUFlLFdBQWYsR0FBNkIsV0FBN0I7QUFDQSxpQkFBZSxXQUFmLEdBQTZCLFdBQTdCO0FBQ0EsaUJBQWUsY0FBZixHQUFnQyxXQUFoQztBQUNBLGlCQUFlLFVBQWYsR0FBNEIsV0FBNUI7QUFDQSxpQkFBZSxVQUFmLEdBQTRCLFdBQTVCO0FBQ0EsaUJBQWUsYUFBZixHQUErQixXQUEvQjtBQUNBLElBQUUsa0JBQUYsRUFBc0IsS0FBdEIsQ0FBNEIsVUFBVSxDQUFWLEVBQWE7QUFDdkMsTUFBRSxjQUFGO0FBQ0EsUUFBSSxnQkFBZ0IsRUFBRSxvQkFBRixFQUF3QixHQUF4QixFQUFwQjtBQUNBLFFBQUksV0FBVyxFQUFFLFlBQUYsRUFBZ0IsR0FBaEIsRUFBZjtBQUNBLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixtREFBbUQsZUFBZSxnQkFBZ0IsR0FBaEIsR0FBc0IsUUFBckMsQ0FBMUU7QUFDQTtBQUVELEdBUEQ7QUFTRCxDQXRERCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuICAvLyBPZmZzZXQgRml4ZWQgTmF2aWdhdGlvblxyXG4gICQoJyNoZXJvLXNlY3Rpb24gLm1lbnUtbGlua3MgYSwgLm1vYmlsZS1saW5rcyBhLCAuYnRuLXByaW1lJykuY2xpY2soKGUpID0+IHtcclxuICAgIGNvbnN0IGxpbmtUYXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCkuYXR0cignaHJlZicpO1xyXG5cclxuICAgIGlmIChsaW5rVGFyZ2V0ID09PSAnIycgfHwgbGlua1RhcmdldC5jaGFyQXQoMCkgIT09ICcjJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRvcE9mZnNldCA9ICQobGlua1RhcmdldCkub2Zmc2V0KCkudG9wO1xyXG4gICAgbGV0IG5hdkNvbnRhaW5lciA9ICcudG9wLWZpeGVkJztcclxuICAgIGlmICgkKCcubW9iaWxlLW5hdicpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgIGlmICgkKCcjYnVyZ2VyJykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICBuYXZDb250YWluZXIgPSAnLm1vYmlsZS1tZW51IGlucHV0fm5hdic7XHJcbiAgICAgICAgJCgnI2J1cmdlcicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b3BPZmZzZXQgLT0gJChuYXZDb250YWluZXIpLmhlaWdodCgpO1xyXG5cclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wOiB0b3BPZmZzZXQsXHJcbiAgICB9LCA5MDApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjc2VjdGlvbi1idG4gYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNzZWN0aW9uLWJ0biBidXR0b24nKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNtb2JpbGUtZmFxJykuY2hhbmdlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSAkKCcjbW9iaWxlLWZhcScpLnZhbCgpO1xyXG4gICAgJCgnIycgKyBzZWxlY3RlZCkudHJpZ2dlcignY2xpY2snKTtcclxuICB9KTtcclxuXHJcbiAgdmFyIHNob3BpZnlWYXJpYW50ID0ge307XHJcbiAgc2hvcGlmeVZhcmlhbnQubW9udGhseV9zcnQgPSAyODQyNTY0MTU1MjtcclxuICBzaG9waWZ5VmFyaWFudC5tb250aGx5X2hydCA9IDI4NDI1NjQxNjE2O1xyXG4gIHNob3BpZnlWYXJpYW50Lm1vbnRobHlfYnVuZGxlID0gMjg0MjU2NDE2ODA7XHJcbiAgc2hvcGlmeVZhcmlhbnQueWVhcmx5X3NydCA9IDI4NDMzMjAzMzQ0O1xyXG4gIHNob3BpZnlWYXJpYW50LnllYXJseV9ocnQgPSAyODQzMzIwMzQwODtcclxuICBzaG9waWZ5VmFyaWFudC55ZWFybHlfYnVuZGxlID0gMjg0MzMyMDM0NzI7XHJcbiAgJChcIiNhZGQtdG8tY2FydC1idG5cIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBwbGFuRnJlcXVlbmN5ID0gJCgnI3BheW1lbnQtZnJlcXVlbmN5JykudmFsKCk7XHJcbiAgICB2YXIgYm9va1R5cGUgPSAkKCcjYm9vay10eXBlJykudmFsKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cuc2hvcHNoZXJlYWRzdHJ1dGguY29tL2NhcnQvYWRkP2lkPVwiICsgc2hvcGlmeVZhcmlhbnRbcGxhbkZyZXF1ZW5jeSArICdfJyArIGJvb2tUeXBlXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiaHR0cHM6Ly93d3cuc2hvcHNoZXJlYWRzdHJ1dGguY29tL2NhcnQvYWRkP2lkPVwiICsgc2hvcGlmeVZhcmlhbnRbcGxhbkZyZXF1ZW5jeSArICdfJyArIGJvb2tUeXBlXSk7XHJcblxyXG4gIH0pXHJcblxyXG59KTsiXX0=
