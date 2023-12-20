import { Route, Routes } from "react-router-dom";
import{ HomePage} from "./routes/HomePage.jsx";



export const App = () => {


  return (
    
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path='/*' element={<HomePage />} />
     
      </Routes>
    </>
  )
}
