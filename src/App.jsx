import './App.css'
import SmallCard  from './components/molecules/smallCard/smallCard';
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <SmallCard title={"Los besos en el Pan"} text={"Hay que ser muy valiente para pedir ayuda, ¿sabes? Pero hay que ser todavía más valiente para aceptarla."}/>
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
