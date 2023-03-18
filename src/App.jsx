import './App.css'
import   NavBar  from './components/molecules/navBar/Navbar'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
