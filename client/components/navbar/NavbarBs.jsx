import React from 'react'
import TitleSection from './TitleSection'
import NavLinks from './NavLinks'

const NavbarBs = () => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top header' id='header-menu' component='navbar'>
      <div className='container'>
        <TitleSection />
        <div id='nav-dropdown' className='hidden-xs'>

          <ul className='nav navbar-nav navbar-right hidden-xs'>
            <li>
              <a href='#' id='reconnect' className='hide' title='Looks like your connection to Space Baconators was lost, please wait while we try to reconnect.'>
                <i className='fa fa-check' />
              </a>
            </li>
          </ul>

          <ul className='nav navbar-nav navbar-right pagination-block visible-lg visible-md'>
            <li className='dropdown'>
              <a><i className='fa fa-angle-double-up pointer fa-fw pagetop' /></a>
              <a><i className='fa fa-angle-up pointer fa-fw pageup' /></a>

              <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                <span className='pagination-text' />
              </a>

              <a><i className='fa fa-angle-down pointer fa-fw pagedown' /></a>
              <a><i className='fa fa-angle-double-down pointer fa-fw pagebottom' /></a>

              <div className='progress-container'>
                <div className='progress-bar' />
              </div>

              <ul className='dropdown-menu' role='menu'>
                <li>
                  <input type='text' className='form-control' id='indexInput' placeholder='Enter index' />
                </li>
              </ul>
            </li>
          </ul>

          <NavLinks />

        </div>
      </div>
    </nav>
  )
}

export default NavbarBs
