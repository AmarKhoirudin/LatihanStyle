import React from "react";
import "./index.css";

const InputSms = ({ title }) => {
  const [text, setText] = React.useState(
    `Halo Bili, perkenalkan kami OCA (Omni Communication Assistant). Aplikasi berbasis web yang bisa membantu kamu menyebarkan pesan baik itu menggunakan voice ataupun text. Kamu bisa menjangkau seluruh konsumen dengan cepat, masif, dan otomatis. Info lebih lanjut kunjungi web kami 
  
www.ocatelkom.co.id`
  );
  console.log("mar", text);
  return (
    <div className="wrapperTypeSms">
      <p className="titleInputSms">{title}</p>
      <div className="TypeSms">
        <textarea
          placeholder="name of your broadcast"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
        <p className="CaracterTypeSms">Character {text.length}/1024</p>
    </div>
  );
};

export default InputSms;
