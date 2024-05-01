var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var doctor_swiper = new Swiper(".doctorSwiper", {
    spaceBetween: 30,
    loop:true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetweenSlides: 30
     },
     768:{
      slidesPerView: 3,
      spaceBetweenSlides: 30
     },
    }
  });

  var ourGallery = new Swiper(".ourGallery", {

    slidesPerView:1,
    spaceBetween:10,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetweenSlides: 30,
       },
       768: {
        slidesPerView: 4,
        spaceBetweenSlides: 30,
       },
       992: {
        slidesPerView: 4,
        spaceBetweenSlides: 30,
       },
  
      }
  });

  var swiper = new Swiper(".happyCustSwiper", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetweenSlides: 30
       },
  
      }
  });

  $.fn.isInViewport = function() {
	  try {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
	  
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
	  
		return elementBottom > viewportTop && elementTop < viewportBottom;
	  } catch (e) {}
  };

  let once = 0;

  $(window).on('resize scroll load', function(){
    if ($('#totaldownloads').isInViewport() && once == 0) {
      let doctors = new countUp.CountUp('doctors', 10, {duration: 3, suffix: '+'});
      let happyPatients = new countUp.CountUp('happy_Patients',10000, {duration: 3, suffix: '+'});
      let medicalBeds = new countUp.CountUp('medicalBeds',5, {duration: 3, suffix: '*'});
      let winningAwards = new countUp.CountUp('winning_Awards', 32, { duration: 3, prefix: '', suffix: '+'});
     
      doctors.start();
      medicalBeds.start();
      winningAwards.start();
      happyPatients.start();
      once = 1;
    } 

    });

    function popupOpen(){
      const element = document.getElementById("wa-pop");
      element.classList.remove("d-none");
      element.classList.add("d-flex");
    }
    function popupClose(){
      const element = document.getElementById("wa-pop");
      element.classList.remove("d-flex");
      element.classList.add("d-none");
    }
     