import './App.css'
import "./Socials.css"
import linkedinLogo from '/linkedin.svg'
import itchLogo from '/itchio.svg'

function Navbar() {
    return (
        <nav className="socials">
            <ul className="socials-links">
                <li>
                    <a href="https://www.linkedin.com/in/zak-lembarra" target="_blank">
                        <img src={linkedinLogo} className="logo" alt="LinkedIn Logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/zaklembarra" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="logo" alt="GitHub Logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://zakispie.itch.io" target="_blank">
                        <img src={itchLogo} className="logo" alt="itch.io Logo"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar