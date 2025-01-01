import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Notecard from '../../components/Cards/Notecard'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='container mx-auto'>
      <div className='grid grid-cols-1 gap-3 mt-8 md:grid-cols-2 lg:grid-cols-3'>
      <Notecard
      title="Meeting on New Year"
      date="12/12/2025"
      content="Meeting with the team to discuss the new year plans."
      tags="#Meeting"
      ispinned={true}
      onEdit={()=>{}}
      OnDelete={()=>{}}
      onPin={()=>{}}

      />
      <Notecard
      title="Meeting on New Year"
      date="12/12/2025"
      content="Meeting with the team to discuss the new year plans."
      tags="#Meeting"
      ispinned={true}
      onEdit={()=>{}}
      OnDelete={()=>{}}
      onPin={()=>{}}

      />
      <Notecard
      title="Meeting on New Year"
      date="12/12/2025"
      content="Meeting with the team to discuss the new year plans."
      tags="#Meeting"
      ispinned={true}
      onEdit={()=>{}}
      OnDelete={()=>{}}
      onPin={()=>{}}

      />
      <Notecard
      title="Meeting on New Year"
      date="12/12/2025"
      content="Meeting with the team to discuss the new year plans."
      tags="#Meeting"
      ispinned={true}
      onEdit={()=>{}}
      OnDelete={()=>{}}
      onPin={()=>{}}

      />
      </div>
      </div>

    </>
  )
}

export default Home
