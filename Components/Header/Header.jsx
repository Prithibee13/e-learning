import Banner from "./Banner"
import Nav from "./Nav"
import classess from "./Header.module.css"

const Header = () =>
{
    return (
        <header className={classess.header}>
            <Nav></Nav>
            <Banner></Banner>
        </header>
    )
}

export default Header