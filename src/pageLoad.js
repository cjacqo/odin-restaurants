import Dashboard from "./dashboard/Dashboard"

const onPageLoad = () => {
    const siteParent = document.getElementById('content')
    siteParent.appendChild(Dashboard())
}

export { onPageLoad }