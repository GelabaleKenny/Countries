import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Aboute = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        Voici un site référencent tous les pays. <br />
        amusez-vous avec vos amis à trouver les particularité de chaque pays et
        testez ainsi votre culture générale. <br />
        Ludique et amusant ce petit jeu va agrémenter vos soirée raclette.
      </p>
    </div>
  );
};

export default Aboute;
