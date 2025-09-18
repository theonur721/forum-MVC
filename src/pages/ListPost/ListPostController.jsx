import React, { useEffect, useState } from "react";
import ListPostView from "./ListPostView";
import axios from "axios";

const ListPostController = () => {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setData(res.data));
  }, []);

  return (
    <ListPostView
      data={data}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListPostController;
