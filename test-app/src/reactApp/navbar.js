import React from 'react'
export default class NavBar extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">More Info</a>
        </div>
    </div>
        </nav>
        )
    }
}