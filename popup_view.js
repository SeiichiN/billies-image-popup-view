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
    // クリックした画像の高さに20px(白枠10px * 2)部分を足したものを height とする。
    const height = $('.image-large img')[0].height + 20
    // 同様に白枠20px分を足したものを width とする。
    const width = $('.image-large img')[0].width + 20
    const ratio = height / width 
    const w_height = $(window).height()
    const w_width = $(window).width()
    // 画像よりもウィンドウが大きい場合は、画像をそのままの大きさで表示する。
    if (w_width > width) {
      $('.image-area-bg').css('width', width)
      $('.image-area-bg').css('height', height)
    }
    // 画像の方が大きい場合は、その画像の大きさをウィンドウの8割とする。
    else {
      $('.image-area-bg').css('width', w_width * 0.8)
      $('.image-area-bg').css('height', w_width * 0.8 * ratio)
    }
    $('.image-large-area').fadeIn()
    setBgClick()
    return false
  })

  // 画像+白枠部分をクリックすると、フェードアウトする。
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

// 修正時刻: Sun Aug 15 09:50:38 2021
