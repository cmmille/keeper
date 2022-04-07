import "./footer.css"

function Footer() {
    const year = new Date().getFullYear()

    return <div className="footer">
        <p>©{year} Chris Miller</p>
    </div>
}

export default Footer;