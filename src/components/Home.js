import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/shop">Shop</Link>
      <br />
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Home;
