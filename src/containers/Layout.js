import React from 'react'
import Nav from '../components/nav/Nav'

const Layout = (props) => {
    console.log(props)
  return (
    <main>
        <Nav/>
        <div>
            {props.children}
        </div>
    </main>
  )
}

export default Layout