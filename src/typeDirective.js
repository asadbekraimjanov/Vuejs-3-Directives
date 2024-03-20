export default {
    mounted(el, dat){
        el.attributes.type.ownerElement.className = dat.value
    },

    updated(el, dat) {
        el.attributes.type.ownerElement.className = dat.value
    }
}
