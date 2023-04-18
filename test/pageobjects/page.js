export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://moonlit-nasturtium-7a86e3.netlify.app/${path}`)
    }
}
