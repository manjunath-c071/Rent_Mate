import './Navbar.css';
import Logo from '../../assets/RentMate_Logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src={Logo}
            alt="RentMate Logo" 
            style={{ width: "40px", marginRight: "10px" }} 
          />
          RentMate
        </a>

        {/* Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Buy">Buy</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Rent">For Rent</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Rent">For Rent</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Flatmates">Flatmates</a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                RoomMate
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/Pg">Pg</a></li>
                <li><a className="dropdown-item" href="/Hostel">Hostel</a></li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                L & P
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/Land">Land</a></li>
                <li><a className="dropdown-item" href="/Plot">Plot</a></li>
                
              </ul>
            </li>

          </ul>

          {/* Search */}
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;