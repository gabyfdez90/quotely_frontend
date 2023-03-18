import './App.css'
import SmallCard  from './components/molecules/smallCard/smallCard';
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <SmallCard title={"El coronel no tiene quien le escriba"} text={"Un hombre solo tiene derecho de mirar a otro hacia abajo cuando tiene que ayudarlo a levantarse."}/>
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
