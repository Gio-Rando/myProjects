import { createBrowserRouter, RouterProvider} from "react-router-dom"
import AboutMe from "./AboutMe.jsx"
import Header from "./Header.jsx"
import Loading from "./Loading.jsx"
import SkillsPage from "./Skills.jsx"
import Education from "./Education.jsx"
import Contact from "./Contact.jsx"
import "./index.css"



function App() {
  
  // const router = createBrowserRouter([
  //   {path:"/",element: <div><Header/><AboutMe/></div>},
  //   {path:"/aboutme",element:<div><Header/><AboutMe/></div>},
  //   {path:"/skills",element:<div className="overflow-hidden h-screen"><Header/><Skills /></div>},
  //   {path:"/education",element:<div><Header/></div>},
  //   {path:"/contact",element:<div><Header/></div>},
  
  // ])
  const router = createBrowserRouter([
    {path:"/",element: <div><Header/><Loading/><AboutMe/></div>},
    {path:"/aboutme",element:<div><Header/><AboutMe/></div>},
    {path:"/skills",element:<div className="overflow-hidden h-screen"><Header/><SkillsPage /></div>},
    {path:"/education",element:<div className="overflow-hidden h-screen"><Header/><Education /></div>},
    {path:"/contact",element:<div><Header/><Contact /></div>},
  
  ])

  return (
  <>
    <RouterProvider router={router}/>
  </>
)
}

export default App
