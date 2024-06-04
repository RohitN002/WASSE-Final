import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';

const languages = [
  {code: "en", lang: "English"},
  {code: "fr", lang: "தமிழ்"},
  
];

const LanguageSelector = () => {
  
  const {i18n} = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <Dropdown className="btn-container " >
    
    <Dropdown.Toggle variant="danger" id="dropdown-basic">
    Language
</Dropdown.Toggle>

<Dropdown.Menu>
      {languages.map((lng) => { 

        return (
         
          <Dropdown.Item
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            value={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
            
          </Dropdown.Item>
       
        );
      })}

</Dropdown.Menu>
    </Dropdown>
    

    </>

  );
};
export default LanguageSelector;

