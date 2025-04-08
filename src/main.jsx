
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BasicContextProvider } from './Context/Basic.jsx'

createRoot(document.getElementById('root')).render(
  <BasicContextProvider>
    <App />
  </BasicContextProvider>,
)
