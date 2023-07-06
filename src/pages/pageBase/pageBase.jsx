import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import Container from '../../components/container/container.jsx'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase