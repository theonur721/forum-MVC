import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();
  // classın model örneğini oluşturma
  const model = new AddPostModel();
  // statein varsayılan değerini modelden aldık
  const [form, setForm] = useState(model.state);
  // inputa göre state güncelleycek
  const onInputChange = (label, value) => {
    // satetin kopyası
    const copyState = { ...form };

    copyState[label] = value;

    //statei güncelle
    setForm(copyState);
  };

  console.log(form);

  //formun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form || !form.title || !form.text) {
      alert("lütfen bütün alanları doldurunuz");
      return;
    }

    axios.post("http://localhost:3000/posts", form).then(() => navigate("/"));
  };

  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;
