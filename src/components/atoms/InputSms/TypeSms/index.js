import React from "react";
import "./index.css";

const InputSms = ({ title }) => {
  const [text, setText] = React.useState(
    `Halo Bili, perkenalkan kami OCA (Omni Communication Assistant). Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut kunjungi web kami 
  
www.ocatelkom.co.id`
  );
  console.log("mar", text);
  return (
    <div>
      <p className="titleInputSms">{title}</p>
      <div className="TypeSms">
        {/* <input
          type="text"
          placeholder="name of your broadcast"
          color="#DEDEDE"
        /> */}
        <textarea
          placeholder="name of your broadcast"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputSms;
