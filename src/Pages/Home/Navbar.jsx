import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Typography from "@mui/material/Typography";
// import '../../CSS/Navbar.css'

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px', // Adjust the gap between the image and text as needed
    },
    image: {
      width: '50px', // Adjust the width of the image as needed
      height: '50px', // Adjust the height of the image as needed
      borderRadius: '50%', // Make the image circular
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
      color: '#333', // Adjust text color as needed
      fontWeight: 'bold',
      fontSize: '24px', // Adjust font size as needed
      textTransform: 'uppercase', // Convert text to uppercase
      letterSpacing: '2px', // Adjust letter spacing as needed
    },
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div style={styles.container}>
        <img src="./favicon.ico" alt="Logoipsum" style={styles.image} />
        <Typography variant="h3" style={styles.typography}>
          Atharva Waranashiwar
        </Typography>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-40}
              duration={50}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-40}
              duration={50}
              to="mySkills"
              className="navbar--content"
            >
              My Skills
            </Link>
          </li>
          
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-40}
              duration={50}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-40}
              duration={50}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-40}
        duration={50}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
