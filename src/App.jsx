import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Menu from './components/common/Menu'

function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
    </BrowserRouter>
  )
}

export default App
