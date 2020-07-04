import React from "react";
import Contacts from "../contact/Contacts";
import ContactForm from "../contact/ContactForm";
import ContactFilter from "../contact/ContactFilter";

export const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
