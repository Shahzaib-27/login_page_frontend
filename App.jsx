import { BrowserRouter , Routes , Route } from "react-router-dom"

import SignupForm from "./Components/Signup_page/SUP.jsx"
import LoginPageForm from "./Components/Login_Page/LP.jsx"
import Webdata from "./Components/layout/Layout.jsx"


export default function App() {
return (
  <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SignupForm/>}/>
        <Route path='/loginpage' element={<LoginPageForm/>}/>
        <Route path='/webdata' element={<Webdata/>}/>
      </Routes> 
    </BrowserRouter>
  </>
)
}
