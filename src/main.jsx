import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/filters.jsx'
import './index.css'
import { Menu } from './components/Menu/Menu'
import './components/LOGIN/Form'
import { Form } from './components/LOGIN/Form'
import './components/LOGIN/Form.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <Form/>
    <Menu/>
    <App />
  </FiltersProvider>
)
