import './App.css'
import Calc from './Calc'
import Footer from './Footer'
import Header from './Header'
import PropsDemo from './PropsDemo'
import UserInfo from './UserInfo'

function App() { //JS Part
  return (
    <>
      <Header/>
      <div>
        {/* <p>More components will come here</p> */}
        <UserInfo/>
        <PropsDemo name="Phaniraj" age={49} email ="phanirajbn@gmail.com"/>
        <Calc/>
      </div>
      <Footer/>
    </>
  )
}

export default App
