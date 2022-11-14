import logo from "../logo/logo0.png";

function Header() {
    return(
        <div className="logo d-flex justify-content-center">
          <a className="navbar-brand mapping-main-heading m-3" href="/">
            <img
              src={logo}
              alt=""
              width="40"
              height="35"
              className="d-inline-block align-text-top"
            />
            &nbsp; <h6>Team 8lostbytes Project</h6>
            <h5>UNIFIED KILL CHAIN NAVIGATOR & ATTACK FLOW</h5>
          </a>
        </div>
    )
}

export default Header;