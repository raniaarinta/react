import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';
import { ProductData } from './components/Products/data';
import Reviews from './components/Reviews';
import { ReviewsData} from './components/Reviews/Data_reviews';
import { GlobalStyle } from './globalStyles';



function App() {
  return (
   <div>
     <Router>
       <GlobalStyle/>
       <Hero/>
       <Products heading='Our Rentals Bike' data={ProductData} />
       <Feature/>
       <Reviews data={ReviewsData} />
       <Footer/>
     </Router>
        
   </div>
  );
}

export default App;
