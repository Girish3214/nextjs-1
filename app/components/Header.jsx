import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/code/repos">Learning</Link>
        </div>
        <div className="links">
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
