import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./providers/AuthContext"
import LoginRouting from "./utils/LoginRouter"
import PublicRouting from "./utils/PublicRouter"

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>


            <Route path="/" element={<h1>hi</h1>} />

            
            <Route element={<PublicRouting />} >
              <Route path="/login" element={<Login />} />
            </Route>


            <Route element={<LoginRouting />} >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>



          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App

