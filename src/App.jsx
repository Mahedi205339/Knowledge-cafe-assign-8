import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Courses from './components/Courses.jsx/Courses'
import CreditData from './components/Credit-data/CreditData'

function App(){

  const [creditData ,setCreditData] =useState([]);
  const [readingHour ,setReadingHour]=useState(0)
  const handReadingHour = time =>{
    console.log('reading hour' ,time)
  }
  const handleAddToCreditData = course =>{
    const newCreditData =[...creditData ,course] ;
    setCreditData(newCreditData)
  }

  return (
    <div className='body'>
  <Header></Header>

  <div className='md:flex w-10/12 mx-auto'>
    <Courses handleAddToCreditData={handleAddToCreditData}
    handReadingHour={handReadingHour}
    ></Courses>
    <CreditData creditData={creditData}
    
    ></CreditData>
  </div>
    </div>
  )
}

export default App
