class Drum {
    constructor() {
        this.setListener('click', this.play)
        this.setListener('keydown', this.play)
        this.setTransitional()
    }

    setListener(event, handler) {
        document.addEventListener(event, (e) => {
            let keyEl
            if (event === 'click') {
                keyEl = e.target.closest('.key')
            }
            if (event === 'keydown') {
                keyEl = Array.from(document.querySelectorAll('kbd'))
                    .find((k) => e.key.toUpperCase() == k.innerText.toUpperCase())
                    ?.closest('.key')
            }
            if (!keyEl) return
            handler(keyEl)
        })
    }

    // create click/keydown CSS effect
    setTransitional() {
        window.addEventListener('transitionend', (e) => {
            e.target.classList.remove('playing')
        })
    }

    play(keyEl) {
        keyEl.classList.add('playing')
        const { key } = keyEl.dataset
        let audio = document.querySelector(`audio[data-key='${key}']`)
        audio.currentTime = 0
        audio.play()
    }
}

new Drum()
