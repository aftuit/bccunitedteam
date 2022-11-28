import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Missions from "../components/Missions";
import Preview from "../components/Preview";
import Apartment from "../components/Apartments";
import Video from "../components/Video";
import axios from "axios";
import { API_URL } from "../util";
import { LangContext } from "../context.js";

import Footer from "../components/Footer";
const Home = () => {
  const { lang, languageType } = React.useContext(LangContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [apartment, setApartment] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setApartment(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return isLoading ? (
    <div className="loader-wrapper">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  ) : (
    <div>
      <Header lang={lang} languageType={languageType} />
      <Missions lang={lang} languageType={languageType} />
      <Preview lang={lang} languageType={languageType} />
      <Apartment
        lang={lang}
        languageType={languageType}
        apartment={apartment}
      />
      <Video lang={lang} languageType={languageType} />
      <Footer lang={lang} languageType={languageType} />
    </div>
  );
};

export default Home;
