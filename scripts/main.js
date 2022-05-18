$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false //Tambahan, agar ketika layar 600 tidak ada arrow/anak panah
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false //Tambahan, agar ketika layar 480 (phone) tidak ada arrow/anak panah
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slider-galeri').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false //Tambahan, agar ketika layar 600 tidak ada arrow/anak panah
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false //Tambahan, agar ketika layar 480 (phone) tidak ada arrow/anak panah
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

// Untuk Navbar Active
// 1. tangkap element dengan class navbar-nav
const menu = document.querySelector(".navbar-nav");

// 2. jika element dengan class navbar-nav diklik
menu.addEventListener('click', function(e) {
    // 3. maka ambil element apa yang diklik oleh user
    const targetMenu = e.target;

    // 4. lalu cek, jika element itu adalah link dengan class nav-link
    if(targetMenu.classList.contains('nav-link')) {
            
        // 5. maka ambil menu link yang aktif
        const menuLinkActive = document.querySelector("ul li a.active");

        // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

            // 7. maka hapus class active pada menu yang sedang aktif
            menuLinkActive.classList.remove('active');
        }

        // 8. terakhir tambahkan class active pada menu yang di klik oleh user
        targetMenu.classList.add('active');
    }
});
// Akhir Navbar