const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '14px',color:'#fff' }}>
      <p>
        Made with <span style={{ color: 'red' }}>❤️</span> by{' '}
        <a
          href="https://sayankoley.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', fontWeight: 'bold', color: '#007BFF', }}
        >
          Sayan Creation
        </a>
      </p>
      <p>&copy; {currentYear} Sayan Creation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
