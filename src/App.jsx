import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer';

function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <div className='mainSection'> xdsadsa</div>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
