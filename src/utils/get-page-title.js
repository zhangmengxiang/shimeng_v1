const title = '一切都像视梦'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} ~ ${title}`
    }
    return `${title}`
}
