import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <div>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
          </nav>
      </div>
    );
  }
  
  export default Navigation;