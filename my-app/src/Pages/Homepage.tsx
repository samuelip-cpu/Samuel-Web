import { useNavigate } from "react-router-dom";
export default function Homepage() {
  const navigate = useNavigate();
  return (
    
        <div>
          <h1>Welcome to the Homepage!</h1>
          <p>This is the main landing page of the application.</p>

          <button onClick={() => navigate("/Projects")}>Projects</button>
          <button onClick={() => navigate("/Career")}>Career</button>
          <button onClick={() => navigate("/About")}>About</button>
        </div>
    
  );
}
