import Nav from "./components/Nav"

const onPageLoad = () => {
    const siteParent = document.getElementById('content')
    console.log(Nav())
    siteParent.appendChild(Nav())
}

export { onPageLoad }