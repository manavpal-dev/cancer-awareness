import React from "react";
import Quotes from "./components/Quotes";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Quotes />
      <Banner/>
      <ContactForm/>
    </div>
  );
};

export default App;
