function Footer({ data }) {
  const { profile } = data
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#hero" className="footer-brand">
          <span className="brand-dot">{"<"}</span>
          {profile.name}
          <span className="brand-dot">{" />"}</span>
        </a>
        <p>
          Built with <span className="footer-heart">♥</span> and React &bull; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
