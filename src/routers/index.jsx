import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NavBar from "./component/navBar";
import HeroSection from "./component/heroSection";
import Project from "./component/project";
import Tech from "./component/tech";
import Testimoni from "./component/testimoni";
import Footer from "./component/footer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/hero-section",
        element: <HeroSection />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/tech",
        element: <Tech />
    },
    {
        path: "/testimoni",
        element: <Testimoni />
    },
    {
        path: "/footer",
        element: <Footer />
    }
]);