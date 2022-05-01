$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('nav').slideToggle();
    })
})

$(window).resize(function () {
    if ($(this).width() > 667 && $("nav").is(":hidden")) {
        $("nav").removeAttr("style");
    }
});

$(document).ready(function(){
    $('.fa-filter').click(function(){
        $('category').slideToggle();
    })
})

$(window).resize(function () {
    if ($(this).width() > 667 && $("category").is(":hidden")) {
        $("category").removeAttr("style");
    }
});

$(document).ready(function(){
    $('.fa-angle-down').click(function(){
        $('.noidung').slideToggle();
    })
})
function an1(){
    document.getElementById('giaohangdennha').style.display = "block";
    document.getElementById('nhanhangtaishop').style.display = "none";
}
function an2(){
    document.getElementById('giaohangdennha').style.display = "none";
    document.getElementById('nhanhangtaishop').style.display = "block";
}
function doiMau1(){
    document.getElementById('pay1').style.backgroundColor="#ec7a1c"
    document.getElementById('pay2').style.backgroundColor="white"
    document.getElementById('pay3').style.backgroundColor="white"
}
function doiMau2(){
    document.getElementById('pay2').style.backgroundColor="#ec7a1c"
    document.getElementById('pay1').style.backgroundColor="white"
    document.getElementById('pay3').style.backgroundColor="white"
}
function doiMau3(){
    document.getElementById('pay3').style.backgroundColor="#ec7a1c"
    document.getElementById('pay2').style.backgroundColor="white"
    document.getElementById('pay1').style.backgroundColor="white"
}

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg =document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

function cong(){
    var c=document.getElementById("soluong").value;
    document.getElementById("soluong").value=parseInt(c)+1;
}
function tru(){
    var t=document.getElementById("soluong").value;
    if(parseInt(t)>1)
    document.getElementById("soluong").value=parseInt(t)-1;
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    });
})
// ---------------
// $('.filtering').slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: true
// });

var filtered = false;

$('.js-filter').on('click', function(){
    if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});

$('.filtering').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
