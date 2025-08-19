import logo from "../assets/chef.png"

export function Header() {
    return (
        <header className="header-top">
            <div className="header-content">
                <img src={logo} alt="React Logo"/>
                <span>Chef Mistral</span>
            </div>
        </header>
    )
}