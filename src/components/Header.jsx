import 'styles/Header.css';

// 저 React는 왜 들어가 있는거지..
function Header() {
  return (
    <header className="header">
      <a href="/">
        <h1>My Todo List</h1>
      </a>
      <div>React</div>
    </header>
  );
}

export default Header;
