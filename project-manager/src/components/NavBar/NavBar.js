import './NavBar.css';

export default function NavBar() {

  return (
    <nav>
      <div className='container'>
        <label className="logo">Стро<span>IT</span></label>
      </div>
      <ul>
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">About</a></li>
        <li className="link"><a href="#">Services</a></li>
        <li className="link"><a href="#">Contact</a></li>
        <li><a className="login" href="#">Log in</a></li>
      </ul>
    </nav>
  );
}