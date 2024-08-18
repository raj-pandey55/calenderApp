import './App.css'
import React, {useState, useContext, useEffect} from 'react'
import {getMonth} from './util'
import {CalenderHeader, Sidebar, Month, EventModal} from './components'
import GlobalContext from './context/GlobalContext'




function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIdx} = useContext(GlobalContext)
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIdx))
  }, [monthIdx])

  return (
    <React.Fragment>
      <EventModal />
      <div className='h-screen flex flex-col'>
        <CalenderHeader />
        <div className='flex flex-1'>
          <Sidebar/>
          <Month month = {currentMonth} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
