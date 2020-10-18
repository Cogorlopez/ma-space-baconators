import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
// import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
import AssignmentIcon from '@material-ui/icons/Assignment'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import Tooltip from '@material-ui/core/Tooltip'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    backgroundColor: '#333333'

  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Container>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton> */}
            <Typography variant='h5' className={classes.title}>
              <Link to='/' style={{ textDecoration: 'inherit', color: 'inherit' }}>Space Baconators</Link>
            </Typography>
            <Tooltip title='Shows'>
              <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' component={Link} to='/shows'>
                <AssignmentIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Songs'>
              <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' component={Link} to='/songs'>
                <LibraryMusicIcon />
              </IconButton>
            </Tooltip>
            {/* <Button component={Link} to={'/register'} color="inherit">Register</Button> */}
            {/* <Button component={Link} to={'/login'} color="inherit">Login</Button> */}
            {/* <Link to="/register" className="p-2" style={{textDecoration: 'none', color: "inherit"}}>Register</Link> */}
            {/* <Link to="/login" className="p-2" style={{textDecoration: 'none', color: "inherit"}}>Login</Link> */}
            <a href='https://spacebaconators-forum.herokuapp.com/register' className='p-2' style={{ textDecoration: 'none', color: 'inherit' }}>Register</a>
            <a href='https://spacebaconators-forum.herokuapp.com/login' className='p-2' style={{ textDecoration: 'none', color: 'inherit' }}>Login</a>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar
