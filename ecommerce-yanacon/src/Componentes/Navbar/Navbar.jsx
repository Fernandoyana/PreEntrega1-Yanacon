import { Nav } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Ecommerce</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav class="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-dark'} to="/category/zapatillas">Zapatillas</NavLink>
                        <NavLink className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-dark'} to="/category/indumentaria">Indumentaria</NavLink>
                        
                    </Nav>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar