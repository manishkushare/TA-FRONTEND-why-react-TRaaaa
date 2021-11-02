function Header(){
  return (
    <header className="box-border py-8 bg-green-300 fixed top-0 inset-x-0">
      <div className="container mx-auto flex flex-row justify-between">
        <span>Logo</span>
        <ul className="flex flex-grow justify-end space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;