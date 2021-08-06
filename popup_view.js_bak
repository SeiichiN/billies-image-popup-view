// view.js

'use strict';

(function () {
  var i, imgs, imgcap,
      eles, imageLargeEle, targetFigcap, targetImg,
      setClick, image_area, body_area, setImageClick;

  body_area = document.getElementsByTagName('body')[0];
  image_area = document.getElementsByClassName('image-large-area')[0];
  eles = document.getElementsByClassName('blocks-gallery-item');
  imageLargeEle = document.getElementById('image-large');
  targetFigcap = document.getElementById('figcap');
  targetImg = document.createElement('img'); // img要素を作成

  setImageClick = function() {
    imageLargeEle.addEventListener('click', function () {
      
      image_area.style.display = 'none';
      body_area.style.backgroundColor = '#fff';
    }, false);
  };

  // クリックすると、クリックした画像とキャプションを読み込み、
  // 作成した img要素の画像・キャプションとする
  setClick = function (i) {
	eles[i].addEventListener('click', function () {
      body_area.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      image_area.style.display = 'block';  // 領域を表示
      
	  imgs = eles[i].getElementsByTagName('img'); // HtmlCollection
      imgcap = eles[i].getElementsByTagName('figcaption'); // HtmlCollection
      if (imgcap.length === 0) {
        imgcap = [{textContent: ""}];
      }

	  targetImg.setAttribute('src', imgs[0].src);
	  targetImg.setAttribute('alt', imgcap[0].textContent);
	  targetFigcap.textContent = imgcap[0].textContent;

      // フェードイン
      targetImg.animate (
        [
          {opacity: 0},
          {opacity: 1}
        ],
        {
          duration: 800,
          fill: 'forwards'
        }
      );
      setImageClick();
	}, false);
  };

  // 初期設定
  // ギャラリーの最初の画像とキャプションを読み込む
  imgs = eles[0].getElementsByTagName('img');
  imgcap = eles[0].getElementsByTagName('figcaption'); // HtmlCollection
  if (imgcap.length === 0) {
    imgcap = [{ textContent: "" }];
  }
  
  // 作成した img要素を <figure> の最初の子要素とする
  imageLargeEle.insertBefore(targetImg, imageLargeEle.firstChild);
  // ギャラリーの最初の画像とキャプションに設定
  targetImg.setAttribute('src', imgs[0].src);
  targetImg.setAttribute('alt', imgcap[0].textContent);
  targetFigcap.textContent = imgcap[0].textContent;

  for (i = 0; i < eles.length; i = i + 1) {
	setClick(i);
  }
})();

// 修正時刻: Fri Aug  6 15:44:50 2021
