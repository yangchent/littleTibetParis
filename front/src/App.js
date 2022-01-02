import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
// Import views
import Home from "./views/home";
import About from "./views/about";
import Boutique from "./views/boutique";
import Restaurant from "./views/restaurant";
import Ngo from "./views/ngo";
import Contact from "./views/contact";
import Error404 from "./views/error404";
import Faq from "./views/faq";

// Import components
import Navbar from "./components/navbar";
import Footer from './components/footer';

function App() {

  return (
    <BrowserRouter>
              <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/faq" component={Faq} />
                    <Route exact path="/boutique" component={Boutique} />
                    <Route exact path="/ngo" component={Ngo} />
                    <Route exact path="/restaurant" component={Restaurant} />
                    <Route path="*" component={Error404} />
                </Switch>
              <Footer />
    </BrowserRouter>
  );
}

export default App;