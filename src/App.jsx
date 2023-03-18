import './App.css'
import './index.css'
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import Form from "./components/molecules/form/Form"

export function App() {
  return (
    <BrowserRouter>
      <Form />
      <Layout>
        {
          //Routes
        }
      </Layout>
    </BrowserRouter>
  );
}

export default App
