import './Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-pictures">
          <a href="https://github.com/chuksota" className="github_logo">
            <img src={"/Images/githublogo.png"} alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/chuks-ota-818248127/" className="github_logo">
            <img src={"/Images/linkedInlogo.png"} alt="logo" />
          </a>
        </div>
        <div className="footer-description">
        </div>
      </div>
    </>
  )
}

export default Footer
