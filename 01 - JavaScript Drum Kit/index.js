class Drum {
    constructor() {
        this.setClickListener()
        this.setKeydownListener()
        this.setTransitional()
    }

    setClickListener() {
        document.querySelector('.keys').addEventListener('click', (e) => {
            const keyEl = e.target.closest('.key')
            if (!keyEl) return
            const { key } = keyEl.dataset
            this.play(key)
        })
    }

    setKeydownListener() {
        document.addEventListener('keydown', (e) => {
            const keyEl = Array.from(document.querySelectorAll('kbd'))
                .find((k) => k.innerText.toUpperCase() === e.key.toUpperCase())
                ?.closest('.key')

            if (!keyEl) return
            keyEl.classList.add('playing')
            const { key } = keyEl.dataset
            this.play(key)
        })
    }

    // create click/keydown CSS effect
    setTransitional() {
        window.addEventListener('transitionend', (e) => {
            e.target.classList.remove('playing')
        })
    }

    play(key) {
        let audio = document.querySelector(`audio[data-key='${key}']`)
        audio.currentTime = 0
        audio.play()
    }
}

new Drum()
