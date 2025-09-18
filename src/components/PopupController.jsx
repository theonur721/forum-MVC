import React, { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ userName, setShowPopup }) => {
  const [data, setData] = useState();

  //kullanıcıya ait postları al ve state aktar
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?user=${userName}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <PopupView userName={userName} data={data} setShowPopup={setShowPopup} />
  );
};

export default PopupController;
