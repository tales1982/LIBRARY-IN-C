import { Routes, Route } from 'react-router-dom'
import App from './App'
import SectionTools from "./Components/Tools/index"



function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/SectionTools' element={<SectionTools/>} />
        </Routes>
    )
}

export default MainRoutes