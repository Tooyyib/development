import Header from '../header/Header'
import Footer from '../footer/Footer'

const container = ({children}) => {
  return (
    <div>

        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default container