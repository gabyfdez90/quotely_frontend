import './App.css'
import NavBar from './components/molecules/navBar/NavBar'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
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
