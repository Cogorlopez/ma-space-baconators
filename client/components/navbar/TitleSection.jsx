import React from 'react'

const TitleSection = () => {
  return (
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle pull-left' id='mobile-menu'>
        <span component='notifications/icon' className='notification-icon fa fa-fw fa-bell-o unread-count' data-content='0' />
        <i className='fa fa-lg fa-fw fa-bars' />
      </button>
      <button type='button' className='navbar-toggle hidden' id='mobile-chats'>
        <span component='chat/icon' className='notification-icon fa fa-fw fa-comments unread-count' data-content='0' />
        <i className='fa fa-lg fa-comment-o' />
      </button>

      <a href='/'>
        <h1 className='navbar-brand forum-title'>Space Baconators</h1>
      </a>

      <div component='navbar/title' className='visible-xs hidden'>
        <span />
      </div>
    </div>
  )
}

export default TitleSection
