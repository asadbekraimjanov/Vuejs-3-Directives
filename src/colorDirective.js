export default {
    mounted(el, dat){
        el.style[dat.arg] = dat.value
    },

    updated(el, dat) {
        el.style[dat.arg] = dat.value
        if (dat.arg === 'color'){
            el.style.backgroundColor = '#ffffff'
        }
        else if(dat.arg === 'backgroundColor'){
            el.style.color = '#ffffff'
        }
    }
}
