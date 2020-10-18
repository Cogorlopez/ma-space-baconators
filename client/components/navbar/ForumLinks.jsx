import React from 'react'

const ForumLinks = () => (
  <>
    <ul id='logged-out-menu' className='nav navbar-nav navbar-right'>
      <li>
        <a href='https://spacebaconators-forum.herokuapp.com/register'>
          <i className='fa fa-pencil fa-fw hidden-sm hidden-md hidden-lg' />
          <span>Register</span>
        </a>
      </li>
      <li>
        <a href='https://spacebaconators-forum.herokuapp.com/login'>
          <i className='fa fa-sign-in fa-fw hidden-sm hidden-md hidden-lg' />
          <span>Login</span>
        </a>
      </li>
    </ul>
  </>
)

export default ForumLinks
