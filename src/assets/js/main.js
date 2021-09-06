document.addEventListener('DOMContentLoaded', () => {

  const slider = document.querySelector('.js-slider');
  const sliderLecture = document.querySelector('.js-slider-lecture');
  const sliderPrice = document.querySelector('.js-slider-price');
  const sliderPrice2 = document.querySelector('.js-slider-price-2');
  const mobile = window.innerWidth < 767;
  
  if(slider) {
    new Swiper(slider, {

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      breakpoints: {
        767: {       
          slidesPerView: 1.3,  
          spaceBetween: 16,
       }, 
      }
    })
  }
  

  if(mobile && sliderLecture) {
    new Swiper(sliderLecture, {
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    })
  }

  if(mobile && sliderPrice) {
    new Swiper(sliderPrice, {
      centeredSlides: true,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    })
  }

  if(mobile && sliderPrice2) {
    new Swiper(sliderPrice2, {
      centeredSlides: true,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    })
  }

  const page = document.querySelector('.js-page')

  // Модуль табов 'Цены'
  const priceTabsModule = function() {
    const priceTabs = document.querySelector('.js-tab-price')

    if(priceTabs) {
      const priceTabButtons = priceTabs.querySelectorAll('.js-tab-button')
      const priceTabItems = priceTabs.querySelectorAll('.js-tab-item')

      const toggleTabItem = function(button, item) {
        button.addEventListener('click', function(e){
          e.preventDefault()
          for(let i = 0; i < priceTabButtons.length; i++) {
            priceTabButtons[i].classList.remove('price-section__button--active')
            priceTabItems[i].classList.add('hidden')
          }
          button.classList.add('price-section__button--active')
          item.classList.remove('hidden')
        })
      }
    
      for(let i = 0; i < priceTabButtons.length; i++) {
        toggleTabItem(priceTabButtons[i], priceTabItems[i])
      }
    }
    
  }

  // Модуль табов 'Преподаватели'
  const teacherTabsModule = function() {
    const teacherTabs = document.querySelector('.js-teacher-tabs')

    if(teacherTabs) {
      const teacherTabButtons = teacherTabs.querySelectorAll('.js-teacher-tab-button')
      const teacherTabItems = teacherTabs.querySelectorAll('.js-teacher-tab-item')

      const toggleTabItem = function(button, item) {
        button.addEventListener('click', function(e){
          e.preventDefault()
          for(let i = 0; i < teacherTabButtons.length; i++) {
            teacherTabButtons[i].classList.remove('teacher-section__button--active')
            teacherTabItems[i].classList.add('hidden')
          }
          button.classList.add('teacher-section__button--active')
          item.classList.remove('hidden')
        })
      }
    
      for(let i = 0; i < teacherTabButtons.length; i++) {
        toggleTabItem(teacherTabButtons[i], teacherTabItems[i])
      }
    }
    
  }

  const mobileNavButton = document.querySelector('.js-nav-button')
  const header = document.querySelector('.js-header')

  mobileNavButton.addEventListener('click', function(e){
    e.preventDefault()
    mobileNavButton.classList.toggle('header__nav-trigger--active')
    if(!mobileNavButton.classList.contains('header__nav-trigger--active') && (window.pageYOffset < 40)){
      header.classList.add('header--transparent')
    }else{
      header.classList.remove('header--transparent')
    }
  })
  

  // Модуль модальных окон
  const modalsModule = function(){
    const buttonOpenModal = document.querySelectorAll('button[data-modal="open"]');
    const modal = document.querySelector('.js-modal');
    const modalSignUp = modal.querySelector('.js-sign-up-lesson'); 
    const modalSuccess = modal.querySelector('.js-success'); 
    const modalRequest = modal.querySelector('.js-request');
    const buttonCloseModal = modal.querySelectorAll('button[data-modal="close"]');
    
    // Закрытие модального окна
    // const closeModal = function(){
    //     modal.classList.remove('modal__overlay--active');
    //     page.classList.remove('page--unscrollable');
    // }

    // Открытие модального окна
    // const openModal = function(){
    //     modal.classList.add('modal__overlay--active');
    //     page.classList.add('page--unscrollable');

    //     document.addEventListener('keydown', function(e){
    //         if(e.code === 'Escape'){
    //             closeModal();
    //             hiddenModalContent();
    //         }
    //     });
    // }

    const closeModal = function(button) {
      button.addEventListener('click', function(e){
        e.preventDefault()
        const attribute = button.getAttribute('data-value')
        modal.classList.add('hidden')
        page.classList.remove('page--unscrollable')

        switch (attribute) {
          case 'request':
            modalRequest.classList.add('hidden')
            break
          case 'sign-up-lesson':
            modalSignUp.classList.add('hidden')
            break
          case 'success':
            modalSuccess.classList.add('hidden')
            break
          default:
            return
        }
      })
    }

    const openModal = function(button) {
      button.addEventListener('click', function(e){
        e.preventDefault()
        const attribute = button.getAttribute('data-value')
        modal.classList.remove('hidden')
        page.classList.add('page--unscrollable')

        switch (attribute) {
          case 'request':
            modalRequest.classList.remove('hidden')
            break
          case 'sign-up-lesson':
            modalSignUp.classList.remove('hidden')
            break
          default:
            return
        }
      })
    }

    for(let i = 0; i < buttonOpenModal.length; i++) {
      openModal(buttonOpenModal[i]);
    }

    for(let i = 0; i < buttonCloseModal.length; i++) {
      closeModal(buttonCloseModal[i]);
    }

    

    // // Показ контента окна регистрации
    // const openModalRegistration = function(){
    //     openModal();
    //     modalRegistration.classList.remove('modal--hidden');
    // }

    // // Показ контента окна адреса
    // const openModalAddress = function(){
    //     openModal();
    //     modalAddress.classList.remove('modal--hidden');
    // }

    // // Показ контента окна входа
    // const openModalEnter = function(){
    //     openModal();
    //     modalEnter.classList.remove('modal--hidden');
    // }

    // // Закрытие контента всех окон
    // const hiddenModalContent = function(){
    //     const modals = document.querySelectorAll('.modal-js');
    //     for(let i = 0; i < modals.length; i++) {
    //         modals[i].classList.add('modal--hidden');
    //     }
    // }

    // for(let i = 0; i < modalCloseHandlers.length; i++) {
    //     modalCloseHandlers[i].addEventListener('click', function(e){
    //         e.preventDefault();
    //         closeModal();
    //         hiddenModalContent();
    //     })
    // }

    // for(let i = 0; i < modalRegistrationHandlers.length; i++) {
    //     modalRegistrationHandlers[i].addEventListener('click', function(e){
    //         e.preventDefault();
    //         hiddenModalContent();
    //         openModalRegistration();
    //     });
    // }
    
    // for(let i = 0; i < modalAddressHandler.length; i++){
    //     modalAddressHandler[i].addEventListener('click', function(e){
    //         e.preventDefault();
    //         hiddenModalContent();
    //         openModalAddress();
    //     });
    // }
    
    // if(modalEnterHandler){
    //     modalEnterHandler.addEventListener('click', function(e){
    //         e.preventDefault();
    //         openModal();
    //         openModalEnter();
    //     });
    // }
    
    // // Закрытие модального окна на overlay
    // modal.addEventListener('click', function(e){
    //     let wrapper = modal.querySelector('.modal__wrapper-js');
    //     e.preventDefault();
    //     if(e.target === wrapper){
    //         closeModal();
    //         hiddenModalContent();
    //     }
    //     e.stopPropagation();
    // });
    

  }

  const fixedHeader = function(){


    window.addEventListener('scroll', function(){
      if(window.pageYOffset > 40) {
        header.classList.remove('header--transparent')
      }else{
        header.classList.add('header--transparent')
      }
    })
  }

  modalsModule()
  priceTabsModule()
  teacherTabsModule()
  fixedHeader()

})