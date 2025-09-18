import React from "react";
import { NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <h1>Forum</h1>
      <NavLink to="/">Gönderiler</NavLink>
      <NavLink to="/add-post">Gönderi ekle</NavLink>
    </header>
  );
};

export default HeaderView;
