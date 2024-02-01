import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-background">
      <div className='home-container'>
        <div className='home-heading-container'>
          <h1 className='home-heading'>Master Queries with SQLiter: Enhancing Your Query Skills{<br />}</h1>

          <Link to='/editor'>
            <button className='button'>Click Here</button>
          </Link>
        </div>
      </div>
      <footer className='footer'>
       

      </footer>
    </div>
  );
};

export default Home;
