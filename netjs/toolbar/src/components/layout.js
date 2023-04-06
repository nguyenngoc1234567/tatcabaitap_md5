import Link from 'next/link';

const Toolbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      {children}
    </>
  );
};

export default Layout;
