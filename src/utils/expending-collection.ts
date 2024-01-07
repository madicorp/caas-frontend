// eslint-disable-next-line
import Swiper from 'swiper';

export default function createExpandingCollection() {

  let fashionSlider: Swiper
  const calcOffsets = (slideEl: any) => {
    const coverEl = slideEl.querySelector('.expanding-collection-cover');
    const contentEl = slideEl.querySelector('.expanding-collection-content');
    if (!contentEl || !coverEl) return;
    const { offsetWidth: coverWidth, offsetHeight: coverHeight } = coverEl;
    slideEl.style.setProperty(
      '--expanding-collection-cover-height',
      `${coverHeight}px`,
    );
    const { offsetHeight: contentHeight, offsetWidth: contentWidth } =
      contentEl;
    const props = {
      '--expanding-collection-scale-x': (coverWidth / contentWidth) * 0.95,
      '--expanding-collection-scale-y': (coverHeight / contentHeight) * 0.95,
    } as any
    Object.keys(props).forEach((prop: string) => {
      slideEl.style.setProperty(prop, props[(prop as string)]);
    });
  };

  const initEvents = (swiper: Swiper) => {
    swiper.slides.forEach((slideEl) => {
      const containerEl = slideEl.querySelector(
        '.expanding-collection-container',
      ) as HTMLElement;
      const coverEl = slideEl.querySelector('.expanding-collection-cover') as any;
      const contentEl = slideEl.querySelector('.expanding-collection-content') as any;
      if (!containerEl || !coverEl || !contentEl) return;
      coverEl.expandingCollectionClickHandler = () => {
        if (!contentEl || !slideEl.classList.contains('swiper-slide-active'))
          return;
        containerEl.classList.toggle('expanding-collection-opened');
      };
      coverEl.addEventListener(
        'click',
        coverEl.expandingCollectionClickHandler,
      );
    });
  };
  const removeEvents = (swiper: Swiper) => {
    swiper.slides.forEach((slideEl: HTMLElement) => {
      const coverEl = slideEl.querySelector('.expanding-collection-cover') as any;
      if (coverEl && coverEl.expandingCollectionClickHandler) {
        coverEl.removeEventListener(
          'click',
          coverEl.expandingCollectionClickHandler,
        );
      }
    });
  };

  const onNextClick = () => {
      fashionSlider?.slideNext()
  }
  const onPrevClick = () => {
      fashionSlider?.slidePrev()
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

  function init(swiper: Swiper) {
    fashionSlider = swiper
    swiper.slides.forEach((slideEl) => {
      calcOffsets(slideEl);
    });
    requestAnimationFrame(() => {
      swiper.el.classList.add('expanding-collection-initialized');
    });
    initEvents(swiper);
    // init navigation
    initNavigation(swiper)
  }
  function slideChange(swiper: Swiper) {
    const openedContainerEl = swiper.wrapperEl.querySelector(
      '.expanding-collection-opened',
    );
    if (openedContainerEl) {
      openedContainerEl.classList.remove('expanding-collection-opened');
    }
  }
  function imagesReady(swiper: Swiper) {
    swiper.el.classList.remove('expanding-collection-initialized');
    swiper.slides.forEach((slideEl) => {
      calcOffsets(slideEl);
    });
    swiper.el.classList.add('expanding-collection-initialized');
  }
  function resize(swiper: Swiper) {
    swiper.el.classList.remove('expanding-collection-initialized');
    swiper.slides.forEach((slideEl) => {
      calcOffsets(slideEl);
    });
    swiper.el.classList.add('expanding-collection-initialized');
  }
  function beforeDestroy(swiper: Swiper) {
    removeEvents(swiper);
    destroyNavigation(swiper)
  }

  return {
    init,
    slideChange,
    imagesReady,
    resize,
    beforeDestroy,
  };
}
