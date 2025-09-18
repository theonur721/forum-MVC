import React from "react";

const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Yeni Gönderi Ekle</h2>
      <fieldset>
        <label htmlFor="">Kullanıcı Adı</label>
        <input
          onChange={(e) => {
            onInputChange("user", e.target.value);
          }}
          type="text"
          placeholder="örn:Ahmet"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Başlık</label>
        <input
          onChange={(e) => {
            onInputChange("title", e.target.value);
          }}
          type="text"
          placeholder="örn:Mvc Mimarisi"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Açıklama</label>
        <textarea
          onChange={(e) => {
            onInputChange("text", e.target.value);
          }}
          type="text"
          placeholder="Açıklama giriniz..."
          maxLength={"100"}
        />
      </fieldset>

      <button>Gönder</button>
    </form>
  );
};

export default AddPostView;
