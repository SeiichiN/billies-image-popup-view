// view.js

'use strict';

$( () => {
  const html_txt = String()
             + '<div class="image-large-area">'
             +   '<div class="image-area-bg">'
             +     '<figure class="image-large">'
             +       '<figcaption id="figcap"></figcaption>'
             +     '</figure>'
             +   '</div>'
             + '</div>'

  $('.blocks-gallery-item').on('click', (e) => {
    $('body').prepend(html_txt)
    const img_src = e.target.src
    const img_alt = e.target.alt
    const img_html = '<img src="' + img_src + '" alt="' + img_alt + '">'
    $('.image-large').prepend(img_html)
    // console.log($('.image-large')[0])
    // console.log($('.image-large img')[0].height)
    const height = $('.image-large img')[0].height + 20
    const width = $('.image-large img')[0].width + 20
    $('.image-area-bg').css('width', width)
    $('.image-area-bg').css('height', height)
    $('.image-large-area').fadeIn()
    setBgClick()
    return false
  })

  const setBgClick = () => {
    $('.image-area-bg').on('click', () => {
      $('.image-large-area').fadeOut()
      setTimeout( () => {
        $('.image-large-area').remove()
      }, 800)
      return false
    })
  }

})

// 修正時刻: Sat Aug  7 09:22:28 2021
