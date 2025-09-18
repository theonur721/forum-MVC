import React from "react";

const PopupView = ({ userName, setShowPopup, data }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrapper">
          <h4>
            <span>@{userName}</span>kullanıcısının gönderileri
          </h4>
          <button onClick={() => setShowPopup(false)}>Kapat</button>
        </div>

        {!data && <p>Yükleniyor...</p>}
        {data?.map((post) => (
          <div className="post">
            <h1>{post.title}</h1>
            <h4>{post.text}</h4>
            <p>({post.date})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
