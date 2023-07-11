import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Sobre from './pages/sobre/sobre.jsx'
import Projetos from './pages/projetos/projetos.jsx'
import Contatos from './pages/contatos/contatos.jsx'
import Page404 from './pages/page404/page404.jsx'
import PageBase from './pages/pageBase/pageBase.jsx'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route path="/home" element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes