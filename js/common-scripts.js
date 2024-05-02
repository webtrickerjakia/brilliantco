(function ($) {
    $(function () {

        
        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 55,
            classes: {

                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup',
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                frozen: "headroom--frozen",

            }
        });
        header.init();

        $('.hamburger-trigger').on('click', function () {
            $('body').toggleClass('navShown')
        })

        $(window).on('load', function () {
            setTimeout(function () {
                $('body').addClass('loaded')
                $('.hero-btn-group a').removeClass('bg-black')
                $('.hero-btn-group a').addClass('bg-yellow')
            }, 500)
        })


        var $window = $(window);

        $('.suvnav').parent('li').addClass('has-sub-nav')
        if ($window.width() > 991) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.suvnav').fadeIn()
                })
                $this.mouseleave(function () {
                    $this.find('.suvnav').fadeOut();
                })
            })
        }
        if ($window.width() < 992) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.find('.nav-arrow').click(function (e) {
                    e.preventDefault();
                    $this.find('.suvnav').slideToggle()
                    $this.toggleClass("subnavShown");
                })
            })
        }


        if ($(".our-wrok-item-wrap").length) {
            if ($(window).width() > 767) {
                var swiper = new Swiper(".our-wrok-item-wrap.mySwiper", {
                    speed: 1100,
                    loop: false,
                    centeredSlides: false,
                    slidesPerView: '3',
                    spaceBetween: 24,
                    effect: "slide",
                })
            }
            if ($(window).width() < 768) {
                var swiper = new Swiper(".our-wrok-item-wrap.mySwiper", {
                    speed: 1100,
                    loop: false,
                    centeredSlides: false,
                    slidesPerView: '1',
                    spaceBetween: 15,
                    effect: "cards",
                    grabCursor: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                })
            }

        }


        //  venue-carousel function 
        if ($('.testimonial-item-wrap').length) {
            
            
            
            
            var slideCount = $('.testimonial-slide-count-wrap');
            var slickSlide = $('.testimonial-item-wrap');
            var slickPrevBtn = $('.testimonial-wrap').find('.slick-prev');
            var slickNextBtn = $('.testimonial-wrap').find('.slick-next');

            slickSlide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                slideCount.html('<span class="slideCountItem">' + i + '</span>'+'/'+'<span class="slideCountAll">' + slick.slideCount + '</span>');
            });

            slickSlide.slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: false,
                navigation: false,
                fade: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: slickPrevBtn,
                nextArrow: slickNextBtn
            });
            
//
//            var currentSlide;
//            var slidesCount;
//            var sliderCounter = document.createElement('div');
//            sliderCounter.classList.add('slide-count-wrap');
//
//            var updateSliderCounter = function (slick, currentIndex) {
//                currentSlide = slick.slickCurrentSlide() + 1;
//                slidesCount = slick.slideCount;
//                $(sliderCounter).html('<span class="current">' + '' + currentSlide + '</span>' + '<em>' + '/' + '</em>' + '<span class="total">' + '' + slidesCount + '</span>')
//            };
//
//            $('.testimonial-item-wrap').on('init', function (event, slick) {
//                $('.testimonial-counter-and-arrow').prepend(sliderCounter);
//                updateSliderCounter(slick);
//            });
//
//            var slickPrevBtn = $('.testimonial-wrap').find('.slick-prev');
//            var slickNextBtn = $('.testimonial-wrap').find('.slick-next');
//
//            $('.testimonial-item-wrap').slick({
//                dots: false,
//                arrows: true,
//                autoplay: false,
//                autoplaySpeed: 5000,
//                infinite: false,
//                navigation: false,
//                fade: true,
//                speed: 300,
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                prevArrow: slickPrevBtn,
//                nextArrow: slickNextBtn
//            });
        }
        // End venue-carousel function 

        if ($('.our-clients-item-wrap').length) {
            $('.our-clients-item-wrap').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: false,
                cssEase: 'linear',
                slidesToShow: 1,
                draggable: false,
                focusOnSelect: false,
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false
            });
        }


        // Start Secvice JS
        var swiper = new Swiper(".our-process-component-wrap.mySwiper", {
            speed: 1100,
            loop: false,
            centeredSlides: false,
            slidesPerView: '1',
            spaceBetween: 0,
            effect: "slide",
            freeMode: true,
            navigation: {
                nextEl: ".process-button-next",
                prevEl: ".process-button-prev",
            },
            breakpoints: {
                
                769: {
                    slidesPerView: '2.5',
                }
            }
        })

        
        $(".bottom-scroll-btn").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#process-block").offset().top
            }, 500);

        });
        $(".contact-scroll-btn").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#contact-wrap").offset().top
            }, 500);

        });

        if ($('.secondary-header').length) {
            $('header').addClass('secondary-header')
        }
        if ($('.header-black').length) {
            $('header').addClass('header-black')
        }

        var swiper = new Swiper(".services-slider-item-wrap.mySwiper", {
            speed: 1100,
            loop: false,
            centeredSlides: false,
            slidesPerView: '.5',
            spaceBetween: 0,
            effect: "slide",
            freeMode: true,
            navigation: {
                nextEl: ".services-slider-next",
                prevEl: ".services-slider-prev",
            },
            breakpoints: {
                
                768: {
                    slidesPerView: '1',
                }
            }
        })

        // Start Gallery JS
        
        if ($('.gallery-popup-item-wrap').length) {

            $('.gallery-popup-item-wrap').on('init', function (event, slick) {
                    $('.current').text(slick.currentSlide + 1);
                    $('.total').text(slick.slideCount);
                })
                .slick({
                    arrows: true,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    pauseOnHover: false,
                    speed: 700,
                    infinite: false,
                    asNavFor: '.gallery-popup-title-wrap',
                    prevArrow: $('.popup-arrow-prev'),
                    nextArrow: $('.popup-arrow-next')
                })
                .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $('.current').text(nextSlide + 1);
                });

            $('.gallery-popup-title-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.gallery-popup-item-wrap',
                dots: false,
                arrows: false,
                infinite: false,
            });

            $('.gallery-item').click(function (e) {
                e.preventDefault()
                $('.gallery-popup-wrap').addClass('popup-active')
                var index = $(this).index();
                $('.gallery-popup-item-wrap').slick('slickGoTo', parseInt(index));
                setTimeout(function () {
                    $('.gallery-popup-inner').addClass('popup-active-inner')
                }, 1000)
            });



            $('.gallery-popup-wrap').click(function (e) {
                e.preventDefault()
                $('.gallery-popup-wrap').removeClass('popup-active')
                $('.gallery-popup-inner').removeClass('popup-active-inner')

            });
            $('.gallery-popup-inner').click(function (e) {
                e.stopPropagation();
            })
        }



        // Start Career JS
        $('.career-opportunities-filter-btn a').on('click', function (e) {
            e.preventDefault();
            $('.career-opportunities-filter').slideToggle()
        })

        // $('.our-values-slider').slick({
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     centerMode: true,
        //     arrows: true,
        //     dots: false,
        //     speed: 300,
        //     centerPadding: '20px',
        //     infinite: true,
        //     autoplaySpeed: 5000,
        //     autoplay: true
        // });

        if ($('.our-values-slider').not('.team-component-wrap').length) {
            
            var slideCount2 = $('.our-values-slide-count-wrap').not('.team-component-slide-count-wrap');
            var slickSlide2 = $('.our-values-slider').not('.team-component-wrap');

            slickSlide2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                slideCount2.html('<span class="slideCountItem">' + i + '</span>'+'/'+'<span class="slideCountAll">' + slick.slideCount + '</span>');
            });

            slickSlide2.slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: false,
                navigation: false,
                fade: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                            breakpoint: 768,
                            settings: {
                                slidesToShow:1,
                            }
                    }
                ]
            });
            
//            
//
//            var currentSlide;
//            var slidesCount;
//            var sliderCounter = document.createElement('div');
//            sliderCounter.classList.add('slide-count-wrap');
//
//            var updateSliderCounter = function (slick, currentIndex) {
//                currentSlide = slick.slickCurrentSlide() + 1;
//                slidesCount = slick.slideCount;
//                $(sliderCounter).html('<span class="current">' + '' + currentSlide + '</span>' + '<em>' + '/' + '</em>' + '<span class="total">' + '' + slidesCount + '</span>')
//            };
//
//            $('.our-values-slider').on('init', function (event, slick) {
//                $('.our-culture-inner').append(sliderCounter);
//                updateSliderCounter(slick);
//            });
//
//            $('.our-values-slider').slick({
//                dots: false,
//                arrows: true,
//                autoplay: false,
//                autoplaySpeed: 5000,
//                infinite: false,
//                navigation: false,
//                fade: false,
//                speed: 300,
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                responsive: [
//                    {
//                            breakpoint: 768,
//                            settings: {
//                                slidesToShow:1,
//                            }
//                    }
//                ]
//            });
        }


        if ($('.team-component-wrap').not('.our-values-slider').length) {
            
            
            
            
            var slideCount3 = $('.team-component-slide-count-wrap').not('.our-values-slide-count-wrap');
            var slickSlide3 = $('.team-component-wrap').not('.our-values-slider');

            slickSlide3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                slideCount3.html('<span class="slideCountItem">' + i + '</span>'+'/'+'<span class="slideCountAll">' + slick.slideCount + '</span>');
            });

            slickSlide3.slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: false,
                navigation: false,
                fade: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                            breakpoint: 768,
                            settings: {
                                slidesToShow:1,
                            }
                    }
                ]
            });
            
            
            
            
            
//            
//
//            var currentSlide;
//            var slidesCount;
//            var sliderCounter = document.createElement('div');
//            sliderCounter.classList.add('slide-count-wrap');
//
//            var updateSliderCounter = function (slick, currentIndex) {
//                currentSlide = slick.slickCurrentSlide() + 1;
//                slidesCount = slick.slideCount;
//                $(sliderCounter).html('<span class="current">' + '' + currentSlide + '</span>' + '<em>' + '/' + '</em>' + '<span class="total">' + '' + slidesCount + '</span>')
//            };
//
//            $('.team-component-wrap').on('init', function (event, slick) {
//                $('.team-inner').append(sliderCounter);
//                updateSliderCounter(slick);
//            });
//
//            $('.team-component-wrap').slick({
//                dots: false,
//                arrows: true,
//                autoplay: false,
//                autoplaySpeed: 5000,
//                infinite: false,
//                navigation: false,
//                fade: false,
//                speed: 300,
//                slidesToShow: 3,
//                slidesToScroll: 1,
//                responsive: [
//                    {
//                            breakpoint: 768,
//                            settings: {
//                                slidesToShow:1,
//                            }
//                    }
//                ]
//            });
        }


        
        if ($('.culture-page').length) {
            $('body').addClass('culture-page')
        }
        
        
        if ($('.our-culture-item-wrap').not('.our-values-slider').length) {
            var slideCount4 = $('.culture-slide-count-wrap').not('.our-values-slide-count-wrap');
            var slickSlide4 = $('.our-culture-item-wrap').not('.our-values-slider');

            var slickPrevBtn = $('.our-culture-wrap').find('.slick-prev');
            var slickNextBtn = $('.our-culture-wrap').find('.slick-next');

            slickSlide4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                var i = (currentSlide ? currentSlide : 0) + 1;
                slideCount4.html('<span class="slideCountItem">' + i + '</span>'+'/'+'<span class="slideCountAll">' + slick.slideCount + '</span>');
            });

            slickSlide4.slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                dots: false,
                infinite: true,
                adaptiveHeight: true,
                prevArrow: slickPrevBtn,
                nextArrow: slickNextBtn,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                        }
                ]
            });

            //            
            //            var currentSlide1;
            //            var slidesCount1;
            //            var sliderCounter1 = document.createElement('div');
            //            sliderCounter1.classList.add('slide-count-wrap');
            //
            //            var updateSliderCounter1 = function (slick, currentIndex) {
            //                currentSlide1 = slick.slickCurrentSlide() + 1;
            //                slidesCount1 = slick.slideCount;
            //                $(sliderCounter1).html('<span class="current">' + '' + currentSlide1 + '</span>' + '<em>' + '/' + '</em>' + '<span class="total">' + '' + slidesCount1 + '</span>')
            //            };
            //
            //            $('.our-culture-item-wrap').on('init', function (event, slick) {
            //                $('.our-culture-counter-and-arrow').prepend(sliderCounter1);
            //                updateSliderCounter1(slick);
            //            });
            //
            //            var slickPrevBtn = $('.our-culture-wrap').find('.slick-prev');
            //            var slickNextBtn = $('.our-culture-wrap').find('.slick-next');
            //
            //            $('.our-culture-item-wrap').slick({
            //                autoplay: false,
            //                slidesToShow: 1,
            //                slidesToScroll: 1,
            //                mobileFirst: true,
            //                arrows: true,
            //                dots: false,
            //                infinite: true,
            //                adaptiveHeight: true,
            //                prevArrow: slickPrevBtn,
            //                nextArrow: slickNextBtn,
            //                responsive: [
            //                        {
            //                        breakpoint: 767,
            //                        settings: 'unslick'
            //                        }
            //                ]
            //            });
        }


        if ($('.social-item-wrap').length) {
            $('.social-item-wrap').slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                dots: false,
                infinite: true,
                adaptiveHeight: true,
                prevArrow: $('.social-wrap').find(".slick-prev"),
                nextArrow: $('.social-wrap').find(".slick-next"),
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.social-item-wrap').slick('resize');
            });
        }


        /*$(".service-skip-links-main ul li a").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#services-slider-section").offset().top
            }, 500);

        });*/

        
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
        
        $('.career-filter-row').each(function(){
            var $this = $(this);
            
            $this.find('input[type="text"]').on('click', function(){
                $this.find('.filter-dropdown').slideToggle()
            })
            
            $this.find('.filter-dropdown li').on('click', function(){
                var $thisVal = $(this).text()
                
                $this.find('input[type="text"]').val($thisVal)
                $this.find('.filter-dropdown').slideUp()
                
            })
            
        })
        
        const hSlider = document.querySelector('.js-h-slider')
        const hmSlider = document.querySelector('.js-hm-slider')
        if (hSlider) {
            const items = hSlider.querySelectorAll('.h-slider__item')
            const bodyItem = hSlider.querySelectorAll(".h-slider-card--second .h-slider-card__body")
            const panels = gsap.utils.toArray(items)
            const bodyItemsArr = gsap.utils.toArray(bodyItem)
            const anchors = hSlider.querySelectorAll(".js-anchor")
            hSlider.style.width = items.length * 100 + '%'
            anchors.forEach(anchor => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();
                    let targetElem = document.querySelector(this.getAttribute("href"))
                    let y = targetElem
                    if (targetElem && hSlider.isSameNode(targetElem.parentElement)) {
                        let totalScroll = GSAPHorizontalScrollTL.scrollTrigger.end - GSAPHorizontalScrollTL.scrollTrigger.start,
                            totalMovement = (panels.length - 1) * targetElem.offsetWidth;
                        y = Math.round(GSAPHorizontalScrollTL.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
                    }
                    gsap.to(window, {
                        scrollTo: {
                            y: y,
                            autoKill: false
                        },
                        duration: 1
                    });
                });
            });
            let GSAPHorizontalScrollTL = gsap.timeline({
                scrollTrigger: {
                    trigger: hSlider,
                    pin: true,
                    start: "top top",
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (panels.length - 1),
                        duration: {
                            min: 0.1,
                            max: 0.5
                        },
                        directional: false,
                    },
                    end: () => "+=" + (hSlider.offsetWidth - innerWidth),
                    onScrubComplete: () => {
                        if ($('.js-sticky').length > 0) {
                            $('.js-sticky').hcSticky('refresh');
                        }
                    }
                }
            })
            ScrollTrigger.refresh()
            GSAPHorizontalScrollTL.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
            })
            bodyItemsArr.forEach((el) => {
                let parent = el.closest(".h-slider-card")
                let elBound = parent.getBoundingClientRect()
                let elWidth = elBound.width
                gsap.from(el, {
                    xPercent: 50,
                    scrollTrigger: {
                        scrub: 2,
                        ease: 'none',
                        trigger: parent,
                        start: () => elBound.left,
                        end: () => elBound.left + elWidth,
                        onScrubComplete: () => {
                            if ($('.js-sticky').length > 0) {
                                $('.js-sticky').hcSticky('refresh');
                            }
                        }
                    }
                })
            })
        }
        if (hmSlider) {
                const items = hmSlider.querySelectorAll('.h-slider__item')
                const bodyItem = hmSlider.querySelectorAll(".h-slider-card--second .h-slider-card__body")
                const panels = gsap.utils.toArray(items)
                const bodyItemsArr = gsap.utils.toArray(bodyItem)
                const anchors = hmSlider.querySelectorAll(".js-anchor")
                hmSlider.style.width = items.length * 100 + '%'
                anchors.forEach(anchor=>{
                    anchor.addEventListener("click", function(e) {
                        e.preventDefault();
                        let targetElem = document.querySelector(this.getAttribute("href"))
                        let y = targetElem
                        if (targetElem && hmSlider.isSameNode(targetElem.parentElement)) {
                            let totalScroll = GSAPHorizontalScrollTL.scrollTrigger.end - GSAPHorizontalScrollTL.scrollTrigger.start
                              , totalMovement = (panels.length - 1) * targetElem.offsetWidth;
                            y = Math.round(GSAPHorizontalScrollTL.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
                        }
                        gsap.to(window, {
                            scrollTo: {
                                y: y,
                                autoKill: false
                            },
                            duration: 1
                        });
                    });
                }
                );
                let GSAPHorizontalScrollTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: hmSlider,
                        pin: true,
                        start: "top top",
                        scrub: 1,
                        snap: {
                            snapTo: 1 / (panels.length - 1),
                            duration: {
                                min: 0.1,
                                max: 0.5
                            },
                            directional: false,
                        },
                        end: ()=>"+=" + (hmSlider.offsetWidth - innerWidth),
                        onScrubComplete: ()=>{
                            if ($('.js-sticky').length > 0) {
                                $('.js-sticky').hcSticky('refresh');
                            }
                        }
                    }
                })
                ScrollTrigger.refresh()
                GSAPHorizontalScrollTL.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                })
                bodyItemsArr.forEach((el)=>{
                    let parent = el.closest(".h-slider-card")
                    let elBound = parent.getBoundingClientRect()
                    let elWidth = elBound.width
                    gsap.from(el, {
                        xPercent: 50,
                        scrollTrigger: {
                            scrub: 2,
                            ease: 'none',
                            trigger: parent,
                            start: ()=>elBound.left,
                            end: ()=>elBound.left + elWidth,
                            onScrubComplete: ()=>{
                                if ($('.js-sticky').length > 0) {
                                    $('.js-sticky').hcSticky('refresh');
                                }
                            }
                        }
                    })
                }
                )
            }

        
        
        
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })

      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)     
  
        
        
        
        if ($('.split-heading').length) {
    
            let splitWords = function (selector) {
                var elements = document.querySelectorAll(selector);

                elements.forEach(function (el) {
                    el.dataset.splitText = el.textContent;
                    el.innerHTML = el.textContent
                        .split(/\s/)
                        .map(function (word) {
                            return word
                                .split("-")
                                .map(function (word) {
                                    return '<dfn class="word">' + word + "</dfn>";
                                })
                                .join('<dfn class="hyphen">-</dfn>');
                        })
                        .join('<dfn class="whitespace"> </dfn>');
                });
            };

            let splitLines = function (selector) {
                var elements = document.querySelectorAll(selector);

                splitWords(selector);

                elements.forEach(function (el) {
                    var lines = getLines(el);

                    var wrappedLines = "";
                    lines.forEach(function (wordsArr) {
                        wrappedLines += '<dfn class="line"><dfn class="words">';
                        wordsArr.forEach(function (word) {
                            wrappedLines += word.outerHTML;
                        });
                        wrappedLines += "</dfn></dfn>";
                    });
                    el.innerHTML = wrappedLines;
                });
            };

            let getLines = function (el) {
                var lines = [];
                var line;
                var words = el.querySelectorAll("dfn");
                var lastTop;
                for (var i = 0; i < words.length; i++) {
                    var word = words[i];
                    if (word.offsetTop != lastTop) {
                        // Don't start with whitespace
                        if (!word.classList.contains("whitespace")) {
                            lastTop = word.offsetTop;

                            line = [];
                            lines.push(line);
                        }
                    }
                    line.push(word);
                }
                return lines;
            };

            splitLines(".split-heading");
            
            

            let revealText = document.querySelectorAll(".split-heading");

           $('.split-heading').each(function () {
               var $this = $(this);
               $this.find('.words').each(function(i){
                   $(this).css('transition', '1.2s cubic-bezier(0.19,1,0.22,1) transform')
                   $(this).css('transition-delay', 0 + i * 0.2 + 's')
               })
           });
            
            var $animation_elements = $('.split-heading');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height() / 1.1;
                var insetAmount = window_height / 10 // fifth of the screen
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height) - insetAmount;

                $.each($animation_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('is-visible');

                    }
                });
            }
            $window.on('scroll orientationchange resize', check_if_in_view);
            $window.trigger('scroll');
            
            var $animation_elements1 = $('.fadeIn-from-bottom');
            function check_if_in_view1() {
                var window_height1 = $window.height() / 1.15;
                var insetAmount1 = window_height1 / 10 // fifth of the screen
                var window_top_position1 = $window.scrollTop();
                var window_bottom_position1 = (window_top_position1 + window_height1) - insetAmount1;

                $.each($animation_elements1, function () {
                    var $element1 = $(this);
                    var element_height1 = $element1.outerHeight();
                    var element_top_position1 = $element1.offset().top;
                    var element_bottom_position1 = (element_top_position1 + element_height1);

                    //check to see if this current container is within viewport
                    if (element_top_position1 <= window_bottom_position1) {
                        $element1.addClass('is-visible');

                    }
                });
            }
            $window.on('scroll orientationchange resize', check_if_in_view1);
            $window.trigger('scroll');
        
        }
        
        $('.our-wrok-wrap').mouseenter(function(){
            $('.drag-cursor').fadeIn();
        })
        $('.our-wrok-wrap').mouseleave(function(){
            $('.drag-cursor').fadeOut();
        })
        
        
        gsap.set(".drag-cursor", {
            xPercent: -50,
            yPercent: -50
        });

        const ball = document.querySelector(".drag-cursor");
        const pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        const mouse = {
            x: pos.x,
            y: pos.y
        };

        const speed = 0.35;
        var active = false;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");

        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        gsap.ticker.add(cursor)

        function cursor() {
            if (!active) {
                const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
                pos.x += (mouse.x - pos.x) * dt;
                pos.y += (mouse.y - pos.y) * dt;
                xSet(pos.x);
                ySet(pos.y);
            }
        }
        
        const smiley = $('.moving-smiley')
        let tl4 = gsap.timeline();
        
        
        
        
        tl4.to(smiley, {
            scrollTrigger: {
                trigger: ".we-believe-wrap",
                
                start: "-10%",
                end: "25%",
                scrub: true,
            },
            duration: 2,
            top: "50%",
            rotate: -139,
            left: "-5%",
            scale: 1.3,
            ease: "none",
        });
        tl4.to(smiley, {
            scrollTrigger: {
                trigger: ".we-believe-wrap",
                
                start: "25%",
                end: "45%",
                scrub: true,
            },
            duration: 2,
            top: "70%",
            rotate: -290,
            left: "0%",
            scale: 0.65,
            ease: "none",
            immediateRender: false
        });
        tl4.to(smiley, {
            scrollTrigger: {
                trigger: ".we-believe-wrap",
                
                start: "45%",
                end: "75%",
                scrub: true,
            },
            duration: 2,
            top: "101.5%",
            rotate: -315.5,
            left: "22%",
            scale: 1.2,
            ease: "none",
            immediateRender: false
        });
        tl4.to(smiley.find('.img-1'), {
            scrollTrigger: {
                trigger: ".we-believe-wrap",
                
                start: "75%",
                end: "80%",
                scrub: true,
            },
            duration: 2,
            opacity: 0,
            ease: "none",
            immediateRender: false
        });
        tl4.to(smiley.find('.img-2'), {
            scrollTrigger: {
                trigger: ".we-believe-wrap",
                
                start: "85%",
                end: "95%",
                scrub: true,
            },
            duration: 2,
            opacity: 1,
            ease: "none",
            immediateRender: false
        });
     



// Filter & Sort Menus
// -----------------------------


$('.filter-dropdown').change(function(){
    $this = $(this);
    $('.js-filter-item').hide();
    $('.'+$this.val()).show();
    console.log("showing "+$this.val()+" filters");
   });
	



        
    }) // End ready function.


})(jQuery)