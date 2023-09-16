import { useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'
import Header from './Header/Header'
import Courses from './components/Courses.jsx/Courses'
import CreditData from './components/Credit-data/CreditData'

function App() {

  

  const [creditData, setCreditData] = useState([]);
  const [readingHour, setReadingHour] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const handleReadingHour = (time) => {
    setReadingHour(time + readingHour)
  }
  const handleAddToCreditData = course => {
    const isExist = creditData.find(item => item.id == course.id)
    let count = course.credit;
    let price = course.price;
    if (isExist) {
      return (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already Booked',
      }))
    } else {
      creditData.forEach(item => {
        count = count + item.credit
      })
      const totalRemaining = 20 - count;
    
      if(totalRemaining < 0){
       return  (Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You ran out of your limit',
      }))
      }
        setRemaining(totalRemaining)
      creditData.forEach(item => {
        price = price + item.price;
      })
      setTotalPrice(price)


      const newCreditData = [...creditData, course];
      setCreditData(newCreditData)
    }

  }

  

  return (
    <div className='body'>
      <Header></Header>

      <div className='md:flex w-10/12 mx-auto'>
        <Courses handleAddToCreditData={handleAddToCreditData}
          handleReadingHour={handleReadingHour}
        ></Courses>
        <CreditData creditData={creditData}
          readingHour={readingHour}
          remaining={remaining}
          totalPrice={totalPrice}
        ></CreditData>
      </div>
    </div>
  )
}

export default App
