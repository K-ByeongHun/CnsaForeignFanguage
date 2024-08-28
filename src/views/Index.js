import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

// import Notifications from "views/IndexSections/Notifications.js";
import ESC from "views/IndexSections/EnglishSpeakingChallenge";
// import EBY from "views/IndexSections/bbooyoung";
import CJT from "views/IndexSections/ChinaJapanTravel";

import Navbars from "views/IndexSections/Navbars.js";
import WordGame from "views/IndexSections/WordGame";

import Typography from "views/IndexSections/Typography.js";
// import Modals from "views/IndexSections/Modals";
// import NucleoIcons from "views/IndexSections/NucleoIcons.js";

// import Basics from "views/IndexSections/Basics.js";
import Plan from "views/IndexSections/Plan";
// import Signup from "views/IndexSections/Signup.js";
// import Examples from "views/IndexSections/Examples.js";
// import Download from "views/IndexSections/Download.js";



export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          {/* <Download /> */}
          
          {/* <Notifications />
          <Examples /> */}
          <CJT/>
          <ESC/>
          {/* <EBY/> */}
          {/* <Modals /> */}
          <Navbars />
          <WordGame />
          <Plan />
          <Typography />
        </div>
        <Footer />
      </div>
    </>
  );
}
