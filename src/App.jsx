import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Routes/AnimatedRoutes";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <AnimatedRoutes />
            </BrowserRouter>
        </div>
    );
};

export default App;
