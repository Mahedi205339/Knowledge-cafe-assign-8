import './App.css'
import Header from './Header/Header'
import Courses from './components/Courses.jsx/Courses'
import CreditData from './components/Credit-data/CreditData'

function App() {


  return (
    <div className='body'>
  <Header></Header>

  <div className='md:flex w-10/12 mx-auto'>
    <Courses></Courses>
    <CreditData></CreditData>
  </div>
    </div>
  )
}

export default App
