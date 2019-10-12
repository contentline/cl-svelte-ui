import App from './App.svelte'
    ;(function load() {
    const state = document.readyState
    if (state === 'interactive' || state === 'complete') {

    console.log('Load')
    try {
        new App({
            target: document.getElementById('main')
        })
    } catch (e) {
        console.error(e)
    }

    } else {
        setTimeout(load, 100)
    }
})()
