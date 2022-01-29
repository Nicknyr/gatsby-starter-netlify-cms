import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faReact, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.footer`
  background: #181818;
  color: white;
`

const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>
        <div>
          <div>
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul>
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div>
                <section>
                  <ul>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div>
                <a title="linkedIn" href="https://linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
                <a title="github" href="https://github.com">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a title="stackOverflow" href="https://stackoverflow.com">
                  <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledFooter>
    )
  }
}

export default Footer
