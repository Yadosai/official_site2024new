export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("page:start", async () => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    })
})