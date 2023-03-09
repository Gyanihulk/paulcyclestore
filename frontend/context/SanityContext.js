import React, {
  useContext,
  createContext,
  useState,
  children,
  useEffect,
} from "react";
import { getCategories, getLandingPage, getTestimonials } from "../lib/sanity";

const Context = createContext();

export const SanityContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [landingPage, setLandingPage] = useState([]);
  const [brand, setBrand] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    async function setup() {
      const fetchedCategories = await getCategories();
      const fetchedLandingPage = await getLandingPage();
      const fetchedBrand = await getBrand();
      const fetchedTestimonials = await getTestimonials();
      
      if (fetchedCategories.length !== categories.length) {
        setCategories((oldCategories) => [
          ...oldCategories,
          ...fetchedCategories,
        ]);
      }
      if (fetchedLandingPage.length !== landingPage.length) {
        setLandingPage((oldLandingPage) => [...oldLandingPage, ...fetchedLandingPage]);
      }
      if (fetchedBrand.length !== brand.length) {
        setBrand((oldBrand) => [...oldBrand, ...fetchedBrand]);
      }
      // if (fetchedTestimonials.length !== testimonials.length) {
      //   setTestimonials((oldTestimonials) => [
      //     ...oldTestimonials,
      //     ...fetchedTestimonials,
      //   ]);
      // }
    }
    setup();
  }, []);

  return (
    <Context.Provider value={{ categories, landingPage, testimonials ,brand}}>
      {children}
    </Context.Provider>
  );
};

export const useSanityContext = () => useContext(Context);
