import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import NavbarBs from './components/navbar/NavbarBs'
import './client.css'

const App = () => {
  console.log('App loaded')
  return (
    <Router>
      <nav id='menu' class='slideout-menu hidden'>
        <div class='menu-profile' />
        <section class='menu-section' data-section='navigation'>
          <h3 class='menu-section-title'>Navigation</h3>
          <ul class='menu-section-list' />
        </section>
      </nav>
      <nav id='chats-menu' class='slideout-menu hidden' />
      <NavbarBs />
      <h1>Hello world</h1>
    </Router>
  )
}

export default hot(App)
