
import { Link } from "react-router-dom";
const Navbar=()=>{



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <Link tp="/" className="navbar-brand" >MERN</Link> */}

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Create</Link>
        </li>
        <li className="nav-item">
          <Link to="/all" className="nav-link active" aria-current="page" >View</Link>
        </li>
        {/* <li className="nav-item">
          <Link  to="/update"className="nav-link" href="#">Update</Link>
        </li> */}

        
      </ul>
    </div>
  </div>
</nav>


    )
}
export default Navbar