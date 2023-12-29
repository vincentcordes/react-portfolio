import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/home/home"));
const Apps = React.lazy(() => import("../pages/apps/apps"));
const Projects = React.lazy(() => import("../pages/projects/projects"));
const About = React.lazy(() => import("../pages/about/about"));
const Contact = React.lazy(() => import("../pages/contact/contact"));
const FFPartyGen = React.lazy(() => import("../pages/apps/FFPartyGen/partygen"));
const Unscrambler = React.lazy(() => import("../pages/apps/unscrambler/unscrambler"));

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.APPS, element: <Apps /> },
    { path: PathConstants.PROJECTS, element: <Projects /> },
    { path: PathConstants.CONTACT, element: <Contact /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.APPROUTES.FFPARTYGEN, element: <FFPartyGen /> },
    { path: PathConstants.APPROUTES.UNSCRAMBLER, element: <Unscrambler /> },
]
export default routes;