import { Component } from "react"
import {FaMagnifyingGlass } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/netflix_logo.png"
import avatar from "../../assets/avatar.png"

class CustomNavbar extends Component{

    state={

    }

    render(){
        return(
        <>
        {[ 'md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="none  mb-3" >
            <Container fluid className="bg-black">
              <Navbar.Brand><img
                    src={logo}
                    width="100"
                    alt=""
                  /></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas 
             
                
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                
              >
                <Offcanvas.Header closeButton className="bg-black">
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-black" >
                  <Nav id="nav" className=" flex-grow-1 pe-3 align-items-center  ">
                    <div className="justify-content-start flex-grow-1 pe-3 d-flex column">
                    <Nav.Link className="fw-bold text-white" href="#action1">Home</Nav.Link>
                    <Nav.Link className="fw-bold text-white fw-bold" href="#action2">TV Shows</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#action2">Movies</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#action2">Recently</Nav.Link>
                    <Nav.Link className="fw-bold text-white" href="#action2">MyList</Nav.Link>
                    </div>
                    <div className="justify-content-end flex-grow-1  d-flex invert">
                    <Nav.Link className="fw-bold text-white " href="#action2"><FaMagnifyingGlass/></Nav.Link>
                    <Nav.Link className="fw-bold text-white xm-0 " href="#action2">Kids</Nav.Link>
                    <img className="d-md-flex d-none"
                    src={avatar}
                    width="50"
                    alt=""
                  />
                    </div>
                  
                  </Nav>                               
               </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
        )
    }
}



export default CustomNavbar