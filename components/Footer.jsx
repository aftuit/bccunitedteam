import React from 'react'
import { TextInput, NumberInput } from '@mantine/core';
import { Button } from '@mantine/core';
import axios from "axios";
import style from "../styles/footer.module.scss"

const Footer = ({ lang, languageType }) => {

  const [location, setLocation] = React.useState("1");
  const formEl = React.useRef(null);
  function changeMap(pro) {
    setLocation(pro)
  }

  function sendtoBot(e) {
    e.preventDefault();
    const { phone, name } = e.target.elements;
    console.log({ name: name.value, phone: phone.value })

    axios.post("https://api.rustamovdev.uz/bot/", {
      phone: phone.value.trim(),
      text: name.value.trim()
    })
      .then(res => { console.log(res); formEl.current.reset(); })
      .catch(err => console.log(err))
  }

  return (
    <div className={style.footer} id="contact">
      <div className={style.footer_row}>
        <div className={style.consultation + " container"}>
          <h2 className={style.title}>{lang[languageType].consultation.title}</h2>

          <form ref={formEl} className={style.form + " d-flex align-items-center justify-content-center"} onSubmit={sendtoBot}>
            <div className="container mt-md-0 mt-3">
              <div className="row">
                <div className="col-md-4 col-12">
                  <TextInput
                    label={lang[languageType].consultation.name}
                    size='md'
                    className="w-md-50 me-md-2"
                    required
                    name="name"
                  /></div>
                <div className="col-md-4 col-12">
                  <NumberInput
                    size='md'
                    label={lang[languageType].consultation.tel}
                    className="w-md-50 mx-md-2"
                    required
                    name="phone"
                    hideControls
                  />
                </div>
                <div className="col-md-4 col-12"><Button size='md' type="submit" className="mt-4 w-md-50 ms-md-2">
                  {lang[languageType].consultation.button}
                </Button></div>
              </div>
            </div>
          </form>
          <p style={{ fontSize: '13px' }} className="mt-2">{lang[languageType].consultation.desc}</p>
        </div>
        <div className={style.location}>
          <div className="container">
            <h3>{lang[languageType].footer.title}</h3>

            <div className="d-flex my-3 flex-column flex-sm-row">
              <Button variant={location === "1" ? "filled" : "outline"} size='md' className={`mx-1 mt-sm-0 mt-1`} onClick={() => changeMap("1")}>{lang[languageType].footer.b1}</Button>
              <Button variant={location === "3" ? "filled" : "outline"} size='md' className={`mx-1 mt-sm-0 mt-1`} onClick={() => changeMap("3")}>{lang[languageType].footer.b2}</Button>
              <Button variant={location === "2" ? "filled" : "outline"} size='md' className={`mx-1 mt-sm-0 mt-1`} onClick={() => changeMap("2")}>{lang[languageType].footer.b3}</Button>
            </div>

          </div>

          <iframe
            src={
              location === "1" ?
                "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2490.8816392109084!2d69.19558098852792!3d41.20787261097882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1669234054429!5m2!1suz!2s" :
                location === "2" ?
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069.2068041874236!2d69.19374640322353!3d41.218855416802164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae615c1de353f7%3A0x54be146fa7ae57af!2sYangi%20Dorkhon!5e1!3m2!1suz!2s!4v1669233871673!5m2!1suz!2s" :
                  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d740.5675256943946!2d69.19808393697954!3d41.20575350021856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1669233982947!5m2!1suz!2s"}
            style={{ width: "100%", height: "100%", border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="container-fluid py-2" style={{ backgroundColor: "#173E62" }}>
        <p className='text-white text-center mb-0'>BCC United Team - Zamonaviy uylar!</p>
      </div>
    </div>
  )
}
export default Footer