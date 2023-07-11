import stylesContainer from './container.module.css'

function Container({ children }) {
    return (
        <section className={stylesContainer.container}>
            {children}
        </section>
    )
    
}

// Container.propTypes = {
//     children: PropTypes.any
//   }.isRequired

export default Container