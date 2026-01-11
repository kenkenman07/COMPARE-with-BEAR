import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Dash from "./pages/Dash";
import Data from "./pages/Data";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dash />} />
        </Route>

          <Route path="/data" element={<Data />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App;
