import Swiper from 'swiper'

export default function createFashionSlider() {
  let navigationLocked = false
  let transitionDisabled = false
  let frameId: number

  let fashionSlider: Swiper

  // eslint-disable-next-line
  const disableTransitions = (el: any) => {
    el.classList.add('fashion-slider-no-transition')
    transitionDisabled = true
    cancelAnimationFrame(frameId)
    frameId = requestAnimationFrame(() => {
      el.classList.remove('fashion-slider-no-transition')
      transitionDisabled = false
      navigationLocked = false
    })
  }

  const onNextClick = () => {
    if (!navigationLocked) {
      fashionSlider?.slideNext()
    }
  }
  const onPrevClick = () => {
    if (!navigationLocked) {
      fashionSlider?.slidePrev()
    }
  }

  const initNavigation = (swiper: Swiper) => {
    // Use lock to control the button locking time without using the button component that comes with it
    swiper.el.querySelector('.fashion-slider-button-next')?.addEventListener('click', onNextClick)
    swiper.el.querySelector('.fashion-slider-button-prev')?.addEventListener('click', onPrevClick)
  }

  const destroyNavigation = (swiper: Swiper) => {
    swiper.el
      .querySelector('.fashion-slider-button-next')
      ?.removeEventListener('click', onNextClick)
    swiper.el
      .querySelector('.fashion-slider-button-prev')
      ?.removeEventListener('click', onPrevClick)
  }

  function transitionStart(swiper: Swiper) {
    // eslint-disable-next-line
    const { slides, previousIndex, activeIndex, el } = swiper
    if (!transitionDisabled) navigationLocked = true // lock navigation buttons
    const activeSlide = slides[activeIndex]
    const previousSlide = slides[previousIndex]
    const previousImageScale = previousSlide.querySelector('.fashion-slider-scale') as HTMLElement // image wrapper
    const previousImage = previousSlide.querySelector('img') as HTMLElement // current image
    const activeImage = activeSlide.querySelector('img') as HTMLElement // next image
    const direction = activeIndex - previousIndex
    const bgColor = activeSlide.getAttribute('data-slide-bg-color')
    ;(el as HTMLElement).style.backgroundColor = bgColor || '' // background color animation

    previousImageScale.style.transform = 'scale(0.6)'
    previousImage.style.transitionDuration = '1000ms'
    previousImage.style.transform = 'scale(1.2)' // image scaling parallax
    const previousSlideTitle = previousSlide.querySelector(
      '.fashion-slider-title-text'
    ) as HTMLElement
    previousSlideTitle.style.transition = '1000ms'
    previousSlideTitle.style.color = 'rgba(255,255,255,0)' // text transparency animation

    const onTransitionEnd = (e: any) => {
      if (e.target !== previousImage) return
      previousImage.removeEventListener('transitionend', onTransitionEnd)
      activeImage.style.transitionDuration = '1300ms'
      activeImage.style.transform = 'translate3d(0, 0, 0) scale(1.2)' // image shift parallax
      previousImage.style.transitionDuration = '1300ms'
      previousImage.style.transform = `translate3d(${60 * direction}%, 0, 0)  scale(1.2)`
    }
    previousImage.addEventListener('transitionend', onTransitionEnd)
  }

  function transitionEnd(swiper: Swiper) {
    // eslint-disable-next-line
    const { slides, activeIndex, el } = swiper
    const activeSlide = slides[activeIndex] as HTMLElement
    const activeImage = activeSlide.querySelector('img') as HTMLElement

    if (activeSlide.querySelector('.fashion-slider-scale') !== null) {
      ;(activeSlide.querySelector('.fashion-slider-scale') as HTMLElement).style.transform =
        'scale(1)'
    }
    activeImage.style.transitionDuration = '1000ms'
    activeImage.style.transform = 'scale(1)'

    const activeSlideTitle = activeSlide.querySelector('.fashion-slider-title-text') as HTMLElement
    activeSlideTitle.style.transition = '1000ms'
    activeSlideTitle.style.color = 'rgba(255,255,255,1)' // text transparency animation

    const onTransitionEnd = (e: any) => {
      if (e.target !== activeImage) return
      activeImage.removeEventListener('transitionend', onTransitionEnd)
      navigationLocked = false
    }
    activeImage.addEventListener('transitionend', onTransitionEnd)
    // First and last, disable button
    if (activeIndex === 0) {
      ;(el as HTMLElement)
        ?.querySelector('.fashion-slider-button-prev')
        ?.classList.add('fashion-slider-button-disabled')
    } else {
      ;(el as HTMLElement)
        .querySelector('.fashion-slider-button-prev')
        ?.classList.remove('fashion-slider-button-disabled')
    }

    if (activeIndex === slides.length - 1) {
      ;(el as HTMLElement)
        .querySelector('.fashion-slider-button-next')
        ?.classList.add('fashion-slider-button-disabled')
    } else {
      ;(el as HTMLElement)
        .querySelector('.fashion-slider-button-next')
        ?.classList.remove('fashion-slider-button-disabled')
    }
  }

  function beforeInit(swiper: Swiper) {
    const { el } = swiper
    // disable initial transition
    disableTransitions(el)
  }

  function init(swiper: Swiper) {
    fashionSlider = swiper
    // Set initial slide bg color
    // eslint-disable-next-line
    const { slides, activeIndex, el } = swiper
    // set current bg color
    const activeSlide = slides[activeIndex] as HTMLElement;
    (el as HTMLElement).style.backgroundColor = activeSlide.getAttribute(
      'data-slide-bg-color'
    ) as string // background color animation
    // trigger the transitionEnd event once during initialization
    swiper.emit('transitionEnd')
    // init navigation
    initNavigation(swiper)
  }

  function resize(swiper: Swiper) {
    disableTransitions(swiper.el)
  }

  function destroy(swiper: Swiper) {
    destroyNavigation(swiper)
  }

  return {
    transitionStart,
    transitionEnd,
    beforeInit,
    init,
    resize,
    destroy
  }
}
