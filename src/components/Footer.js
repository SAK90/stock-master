import React from 'react'
import './style.css'
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';

function Footer() {
    return (
        <>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xLinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="text-muted">© 2021 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><img src={twitter} className='twitter'></img></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img src={facebook} className='facebook'></img></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img src={instagram} className='instagram'></img></a></li>
                    </ul>
                </footer>
        </>
    )
}

export default Footer
