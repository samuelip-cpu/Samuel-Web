import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <section id ="hero">
        
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />  
          <h1>Hello I'm Samuel</h1> 
        </div>
        
      </section>
      <section id = "projects">
        <div className = "projects">
            <h3>Projects</h3>
            <p>
              A list of projects that showcase the skills and expertise that I possess. Each of the project is a demonstration of my ability to solve problems, create solutions and become providing real world value.
            </p>
            <button onClick={() => navigate("/Projects")}>Explore Projects Page</button>
          </div>
      </section>  
      <section id = "about">
          <div className = "About">
            <h3>About</h3>
            <p>
              A list of my experiences and achievements. This page provides an overview of my professional journey, highlighting some skills and knowledge that I have gained along the way.
            </p>
            <button onClick={() => navigate("/About")}>Explore About Page</button>
          </div>
      </section>   
          
        
    </>
  );
}

export default Homepage;
