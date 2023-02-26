import { createBrowserRouter } from "react-router-dom";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import HomePage from "../components/pages/HomePage";
import Projects from "../components/pages/Projects";
import Skills from "../components/pages/Skills";


export const home = '/';
export const about = '/about';
export const skills = '/skills';
export const projects = '/projects';
export const contact = '/contact';

export const routes = createBrowserRouter([
{path:home, element:<HomePage />},
{path:about, element:<About />},
{path:skills, element:<Skills />},
{path:projects, element:<Projects />},
{path:contact, element:<Contact />},
])