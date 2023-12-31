import React from "react";
import PathConstants from "./pathConstants";

// navbar
const Home = React.lazy(() => import("../pages/home/home"));
const Apps = React.lazy(() => import("../pages/apps/apps"));
const Projects = React.lazy(() => import("../pages/projects/projects"));
const About = React.lazy(() => import("../pages/about/about"));
const Contact = React.lazy(() => import("../pages/contact/contact"));

// apps
const FFPartyGen = React.lazy(() => import("../pages/apps/FFPartyGen/partygen"));
const Unscrambler = React.lazy(() => import("../pages/apps/unscrambler/unscrambler"));
const Calculator = React.lazy(() => import("../pages/apps/calculator/calculator"));

// projects
const Cmdlist = React.lazy(() => import("../pages/projects/cmdlist"));
const PiControllerV1 = React.lazy(() => import("../pages/projects/picontrolerv1"));
const PiControllerV2 = React.lazy(() => import("../pages/projects/picontrolerv2"));
const Professional = React.lazy(() => import("../pages/projects/professional"));
const VideoCapture = React.lazy(() => import("../pages/projects/videocapture"));

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.APPS, element: <Apps /> },
    { path: PathConstants.PROJECTS, element: <Projects /> },
    { path: PathConstants.CONTACT, element: <Contact /> },
    { path: PathConstants.ABOUT, element: <About /> },
    { path: PathConstants.APPROUTES.FFPARTYGEN, element: <FFPartyGen /> },
    { path: PathConstants.APPROUTES.UNSCRAMBLER, element: <Unscrambler /> },
    { path: PathConstants.APPROUTES.CALCULATOR, element: <Calculator /> },
    { path: PathConstants.PROJECTROUTES.CMDLIST, element: <Cmdlist /> },
    { path: PathConstants.PROJECTROUTES.PICONTROLLERV1, element: <PiControllerV1 /> },
    { path: PathConstants.PROJECTROUTES.PICONTROLLERV2, element: <PiControllerV2 /> },
    { path: PathConstants.PROJECTROUTES.PROFESSIONAL, element: <Professional /> },
    { path: PathConstants.PROJECTROUTES.VIDEOCAPTURE, element: <VideoCapture /> },
]
export default routes;