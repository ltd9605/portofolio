import '../App.css'
const Navbar = () => (<nav>
    <div className="nav-logo"><img src="../public/logo.gif" alt="" /></div>
    <div className="nav-list">
        <ul className="list">
            <li><a href='#home'>Home </a></li>
            <li><a href='#about'>About</a></li>
            <li><a href=''>Project</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
    </div>
</nav>);
export default Navbar;