import axios from "axios";
import { useState } from "react";
import "./uploadImg.css";

const UploadImg = () => {
  const [current, setCurrent] = useState("");

  const handleUpload = (e) => {
    setCurrent(e.target.files[0]);
  };

  const handleSave = async () => {
    const apiLink = "https://api.cloudinary.com/v1_1/drdyt9nkv/image/upload/";

    if (!current) return;

    try {
      const formData = new FormData();
      formData.append("file", current);
      formData.append("upload_preset", "default_preset");

      const { data } = await axios.post(apiLink, formData);
      console.log(data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="uploadImg">
      <input
        className="uploadImg_input"
        type="file"
        name="image"
        onChange={handleUpload}
      />
      <button onClick={handleSave}>saveImg</button>
    </div>
  );
};

export default UploadImg;
