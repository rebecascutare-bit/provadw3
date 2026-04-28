function Footer({ author, year }) {
  return (
    <footer className="footer">
      <p>
        {author} &copy; {year}
      </p>
    </footer>
  );
}

export default Footer;
