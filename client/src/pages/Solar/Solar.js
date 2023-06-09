import React, { useEffect, useState } from 'react';
import 'assets/scss/reset.scss';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import wwd1PNG from 'assets/images/solar/wwd1.png';
import wwd2PNG from 'assets/images/solar/wwd2.png';
import price1PNG from 'assets/images/solar/price1.png';
import price2PNG from 'assets/images/solar/price2.png';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import Landing from './components/Landing';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import RoofTypes from './components/RoofTypes';
import Cost from './components/Cost';
import Process from 'components/Process/Process';
import Video from './components/Video';
import Footer from 'components/Footer/Footer';
import Contact from 'components/Contact/Contact';
import Head from 'components/Head/Head';
import solarThumbnailPNG from 'assets/images/solarThumbnail.png';

const Solar = () => {
  const [loading, setLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);
  const lang = useSelector((state) => state.lang.value.lang.payload);
  const langCode = useSelector((state) => state.lang.value.langCode.payload);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (lang) {
      setLoading(false);
    }
  }, [lang]);

  if (loading) return <Loading />;

  const head = lang.headSolar;
  const domain = `${lang.general.domain}/${
    langCode === 'en' ? 'de' : 'en'
  }/solar`;

  return (
    <>
      <Head
        thumbnail={solarThumbnailPNG}
        head={head}
        lang={lang}
        domain={domain}
        langCode={langCode}
      />

      <Navbar lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <Landing
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
      />
      <WhatWeDo
        lang={lang.solar.wwd}
        langCode={langCode}
        img1={wwd1PNG}
        img2={wwd2PNG}
        setContactOpen={setContactOpen}
      />
      <RoofTypes lang={lang} langCode={langCode} />
      <Cost lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <WhatWeDo
        lang={lang.solar.price}
        langCode={langCode}
        img1={price1PNG}
        img2={price2PNG}
        reversed={isDesktop ? true : false}
        setContactOpen={setContactOpen}
      />
      <Process
        lang={lang.solar.process}
        langCode={langCode}
        isDesktop={isDesktop}
      />
      <Video lang={lang} langCode={langCode} />
      <Footer lang={lang} langCode={langCode} setContactOpen={setContactOpen} />
      <Contact
        lang={lang}
        langCode={langCode}
        setContactOpen={setContactOpen}
        contactOpen={contactOpen}
      />
    </>
  );
};

export default Solar;
