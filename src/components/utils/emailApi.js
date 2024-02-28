import emailjs from "@emailjs/browser";

import apiKeys from "./apikeys";

const sendEmail = (topic, emailAdress, message) => {
  emailjs
    .send(
      apiKeys.SERVICE_ID,
      apiKeys.TEMPLATE_ID,
      {
        topic: topic,
        adress: emailAdress,
        message: message,
      },
      {
        publicKey: apiKeys.PUBLIC_KEY,
        blockList: {
          watchVariable: "message",
        },
      }
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};

export default sendEmail;

// отправляет Email на передаваемый функции адрес - emailAdress
// тема сообщения - topic
// текст сообщения - message
// в файле apikeys хранятся данные шаблона письма, почтового сервера, публичный ключ. Данные лучше поместить на сервер в .env файл.
