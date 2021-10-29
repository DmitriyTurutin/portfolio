import React from 'react';
import AboutMe from "./Components/AboutMe/AboutMe";
import Header from "./Components/Header/Header";
// import GitHub from "../public/images/iconmonstr-github-1.svg"
const App: React.FC = () =>  {
  return (
    <div className="container-fluid">
        {/*<div className="row justify-content-center github"><a className={"col"} href="https://github.com/DmitriyTurutin">Link to GitHub</a></div>*/}
        <Header/>
        <AboutMe/>
    </div>
  );
}

export default App;
