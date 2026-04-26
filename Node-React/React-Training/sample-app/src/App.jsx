import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import Calc from './Calc'
import Footer from './Footer'
import Header from './Header'
import PropsDemo from './PropsDemo'
import StateFullComponent from './StateFullComponent'
import UserInfo from './UserInfo'
import StatefullTodoApp from './StatefullTodoApp'

function App() { //JS Part
  return (
    <>
      <Header/>
      <div>
        {/* <p>More components will come here</p> */}
        <UserInfo/>
        <PropsDemo name="Phaniraj" age={49} email ="phanirajbn@gmail.com"/>
        <Calc/>
        <StateFullComponent/>
        <StatefullTodoApp/>
      </div>
      <Footer/>
    </>
  )
}

export default App
