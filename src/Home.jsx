import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor</Link>
    </div>
  );
};

export default Home;
