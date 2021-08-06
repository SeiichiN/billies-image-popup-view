// view.js

'use strict';

$( () => {
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
    $('.image-large-area').fadeIn()
    return false;
  })

  $('.image-area-bg').on('click', () => {
    console.log('CLICK!')
    $('.image-large-area').fadeOut()
    $('.image-large-area').remove()
    return false;
  })

});

// 修正時刻: Fri Aug  6 23:00:31 2021
