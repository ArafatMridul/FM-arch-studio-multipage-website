import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Routes/AnimatedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <AnimatedRoutes />
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
