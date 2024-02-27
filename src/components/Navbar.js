 
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
 
import {   NavLink } from 'react-router-dom';


// import {Navbar , Container} from 'react-bootstrap';

 const BasicExample =() =>{
  return (
     <>
     <nav>
      {/* <li><a href='/'>Home</a></li>
      <li><a href='/about'>about</a></li>
      <li><a href='/blog'>blog</a></li> */}
      {/* <Link  to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/blog'>blog</Link> */}
      <NavLink  to='/' style={{color:"blue",fontSize:"30px"}} >home</NavLink><br/>
      <NavLink to='/about'  style={{color:"blue",fontSize:"30px"}}    >about</NavLink><br/>
      <NavLink to='/blog' style={{color:"blue",fontSize:"30px"}}  >blog</NavLink><br/>
     </nav>  
    </>
    // <Navbar  expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //         <img src={''} alt=""/>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" >
    //       <span className='navbar-toggler-icon'></span>
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/About">About</Nav.Link>
    //         <Nav.Link href="/Blog">Blog</Nav.Link>
           
    //       </Nav>
    //       <span className='navbar-text'>
    //         <div className='social-icon'>
    //           <a href="#"><img src={""} alt=""></img></a>
    //           <a href="#"><img src={""} alt=""></img></a>
    //           <a href="#"><img src={""} alt=""></img></a>
    //         </div>
    //         <button className='vvd' onClick={ () =>console.log("connect")}><span>Let's Connect</span></button>
    //       </span>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default BasicExample;