// 처음화면
var i =0;
var timer = setInterval(add, 2840)

// function add(){
//     i++
//     if (i > 100) {
//        clearInterval(timer)
//     //    $('.introAni').fadeOut(1000)

//        setTimeout(function(){
//            $('.introAni').addClass('on')
//        }, 500)
//        setTimeout(function(){
//            $('.introAni').css({display:'none'})
//        }, 800)
       
//        return false
//     }  
//     $('.introAni .bar p').text(i + "%")
//     // $('.introAni .box .barani').css({ width: i +"%" })
// }
const introAni = document.querySelector('.introAni')
const introAniP = document.querySelector('.introAni p')
// function add(){
//     i++
//     if ( i > 100 ) {
//         clearInterval(timer)
//         setTimeout(function(){
//             introAni.classList.add('on')
//         }, 500)
//         setTimeout(function(){
//             introAni.style.display = 'none'
//         }, 800)
//         return false
//     }
//     introAniP.textContent = i + "%"
// }

function add(){
    setTimeout(function(){
        introAni.style.display = 'none'
    }, 800)
    return false
}

//메뉴
let elLabel = document.querySelectorAll('.radio-group label')
for ( let i = 0; i < elLabel.length; i++ ) {
    elLabel[i].addEventListener('mouseover', function(){
        this.classList.add('on')
    })
    elLabel[i].addEventListener('mouseout', function(){
        this.classList.remove('on')
    })
    elLabel[i].addEventListener('click', function(){
        this.classList.add('active')
        for (let j of this.parentNode.children) {
            if (j !== this) {
                j.classList.remove('active')
            }
        }
    })
}

// let elImgani = document.querySelector('.imgani')
// let elImgbox = document.querySelector('.imgbox')
//     elImgani.addEventListener('click', function(){
//         elImgbox.classList.add('on')
//     })
//sns
let elSns = document.querySelectorAll('.protxt > a')
for ( let k = 0; k < elSns.length; k++ ) {
    elSns[k].addEventListener('mouseover', function(){
        this.classList.add('on')
    })
    elSns[k].addEventListener('mouseout', function(){
        this.classList.remove('on')
    })
} 
var cube = document.querySelector('.cube');
//join me
let elJoin = document.querySelector('.protxt .join')
elJoin.addEventListener('mouseover', function(){
    this.classList.add('on')
})
elJoin.addEventListener('mouseout', function(){
    this.classList.remove('on')
})



var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

