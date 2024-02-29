import { Routes, Route } from 'react-router-dom'


function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<h1>Minha Pagina</h1>} />
        </Routes>
    )
}