// view.js

'use strict';

$( () => {
  var i, imgs, imgcap,
      eles, imageLargeEle, targetFigcap, targetImg,
      setClick, image_area, body_area, setImageClick;

  const html_txt = String()
             + '<div class="image-large-area">'
             +   '<div class="image-area-bg">'
             +     '<figure id="image-large">'
             +       '<figcaption id="figcap"></figcaption>'
             +     '</figure>'
             +   '</div>'
             + '</div>'

  $('.blocks-gallery-item').on('click', (e) => {
    $('body').prepend(html_txt)
    const img_src = e.target.src
    const img_alt = e.target.alt
    const img_html = '<img src="' + img_src + '" alt="' + img_alt + '">'
    $('#image-large').prepend(img_html)
    $('.image-large-area').css('display', 'block').fadeIn()
  })

});

// 修正時刻: Fri Aug  6 22:15:28 2021
