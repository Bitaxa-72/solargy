import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


export const projectPageSlider = () => {
    new Swiper('.first', {
        modules: [Navigation],
        spaceBetween: 20,
        slidesPerView: 3,
        loop: false,
        navigation: {
            prevEl: '.firstPrev',
            nextEl: '.firstNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    })
};
export const projectPageSlider2 = () => {
    new Swiper('.second', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.secondPrev',
            nextEl: '.secondNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    })
};
export const newsPageSlider = () => {
    new Swiper('.third', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.thirdPrev',
            nextEl: '.thirdNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    })
}
export const productPageSlider2 = () => {
    new Swiper('.fourth', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.fourthPrev',
            nextEl: '.fourthNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    })
};
export const personsSlider = () => {
    new Swiper('.fifth', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.fifthPrev',
            nextEl: '.fifthNext ',
        },
    })
};
export const personsSlider2 = () => {
    new Swiper('.sixth', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.sixthPrev',
            nextEl: '.sixthNext',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    })
};
export const about = () => {
    new Swiper('.seventh', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.seventhPrev',
            nextEl: '.seventhNext',
        },
    })
};
export const aboutPageSlider = () => {
    new Swiper('.eighth', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.eighthPrev',
            nextEl: '.eighthNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    })
}
export const aboutWhySlider = () => {
    new Swiper('.nineth', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.ninethPrev',
            nextEl: '.ninethNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1220: { slidesPerView: 3 }
        }
    })
}
export const aboutContactsSlider = () => {
    new Swiper('.tenth', {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.tenthPrev',
            nextEl: '.tenthNext ',
        },
        breakpoints: {
            300: { slidesPerView: 1 },
            420: { slidesPerView: 1.5 },
            576: { slidesPerView: 2 },
            750: { slidesPerView: 3 },
            1116: { slidesPerView: 4 }
        }
    })
}
export const aboutWaySlider = () => {
    new Swiper('.eleventh', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.eleventhPrev',
            nextEl: '.eleventhNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1220: { slidesPerView: 3 }
        }
    })
}
export const aboutTestSlider = () => {
    new Swiper('.twelveth', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 20,
        loop: false,
        navigation: {
            prevEl: '.twelvethPrev',
            nextEl: '.twelvethNext ',
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            1000: { slidesPerView: 1.5 },
            1300: { slidesPerView: 2 }
        }
    })
}
export const bannerSlider = () => {
    new Swiper('.thirteenth', {
        modules: [Navigation],
        slidesPerView: 1,
        loop: false,
        navigation: {
            prevEl: '.thirteenthPrev',
            nextEl: '.thirteenthNext'
        },
        on: {
            init() {
                initBannerProgress(this)
            }
        }
    })
}

function initBannerProgress(swiper) {
    const root = document.querySelector('.thirteenth')
    if (!root || !swiper) return
    const bar = root.querySelector('.ruskeo__banner-sqrollBar')
    const num = root.querySelector('.ruskeo__banner-sqrollNum')
    if (!bar || !num) return

    let fill = bar.querySelector('.ruskeo__banner-sqrollBar-fill')
    if (!fill) {
        fill = document.createElement('div')
        fill.className = 'ruskeo__banner-sqrollBar-fill'
        Object.assign(fill.style, {
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '0%',
            transition: 'width 300ms ease',
            background: '#ffffff',
            borderRadius: '0 30px 30px 0',
            zIndex: '0'
        })
        if (getComputedStyle(bar).position === 'static') bar.style.position = 'relative'
        bar.style.overflow = 'hidden'
        bar.prepend(fill)
    }

    let textSpan = bar.querySelector('.ruskeo__banner-sqrollBar-text')
    if (!textSpan) {
        textSpan = document.createElement('span')
        textSpan.className = 'ruskeo__banner-sqrollBar-text'
        const nodes = Array.from(bar.childNodes).filter(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim())
        nodes.forEach(n => {
            textSpan.appendChild(n)
        })
        if (textSpan.childNodes.length) {
            bar.appendChild(textSpan)
        } else {
            textSpan = bar.querySelector('.ruskeo__banner-sqrollBar-text') || textSpan
        }
    }

    Object.assign(textSpan.style, { position: 'relative', zIndex: '2', display: 'inline-block' })
    num.style.position = 'relative'
    num.style.zIndex = '2'

    function getTotalSlides(sw) {
        if (!sw) return 0
        if (!sw.params.loop) return sw.slides.length
        const looped = sw.loopedSlides || 0
        return Math.max(1, sw.slides.length - looped * 2)
    }
    function updateNum(sw) {
        const total = getTotalSlides(sw)
        const current = (typeof sw.realIndex === 'number') ? sw.realIndex + 1 : sw.activeIndex + 1
        num.textContent = `${current}/${total}`
    }
    function updateBar(sw) {
        const total = getTotalSlides(sw)
        const current = (typeof sw.realIndex === 'number') ? sw.realIndex + 1 : sw.activeIndex + 1
        const percent = (current / total) * 100
        fill.style.width = percent + '%'
        textSpan.style.color = percent > 0 ? '#121212' : '#ffffff'
    }

    function onUpdate(sw) {
        updateNum(sw)
        updateBar(sw)
    }
    onUpdate(swiper)
    swiper.on('slideChange', () => onUpdate(swiper))
    swiper.on('progress', () => onUpdate(swiper))
    swiper.on('resize', () => onUpdate(swiper))
}
export const calculationSlider = () => {
    new Swiper('.fourteenth', {
        modules: [Navigation],
        slidesPerView: 1,
        loop: false,
        navigation: {
            prevEl: '.fourteenthPrev',
            nextEl: '.fourteenthNext ',
        },
    })
}