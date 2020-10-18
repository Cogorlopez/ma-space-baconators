import React from 'react'

const NavLinks = () => (
  <>
    <ul id='main-nav' className='nav navbar-nav'>
      <li className=''>
        <a className='navigation-link' href='/shows' title='Shows'>
          <i className='fa fa-fw fa-file-text-o' data-content='' />
          <span className='visible-xs-inline'>Shows</span>
        </a>
      </li>

      <li className=''>
        <a className='navigation-link' href='/songs' title='Songs'>
          <i className='fa fa-fw fa-music' data-content='' />
          <span className='visible-xs-inline'>Songs</span>
        </a>
      </li>

      {/* <li className=''>
            <a className='navigation-link' href='/categories' title='Categories'>
              <i className='fa fa-fw fa-list' data-content='' />
              <span className='visible-xs-inline'>Categories</span>
            </a>
          </li>

          <li className=''>
            <a className='navigation-link' href='/recent' title='Recent'>
              <i className='fa fa-fw fa-clock-o' data-content='' />
              <span className='visible-xs-inline'>Recent</span>
            </a>
          </li> */}

    </ul>
  </>
)

export default NavLinks
