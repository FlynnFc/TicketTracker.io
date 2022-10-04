import React from 'react'
import Miniticket from '../../components/miniticket/Miniticket'
import Navbar from '../../components/navbar/Navbar'


const index = () => {
  return (
    <div><Navbar/><section id='minitickets' className='fixed bottom-2 left-4 flex flex-row justify-start space-x-4 w-full'><Miniticket title='Small issue with color' priority="error"/><Miniticket title='User forgot password' priority="low"/><Miniticket title='US sever maintainece' priority="medium"/></section></div>
  )
}

export default index