import emailjs from '@emailjs/browser';

import apiKeys from './apikeys';

const sendEmail = (topic, emailAdress, message) => {
  emailjs
    .send(
      apiKeys.SERVICE_ID,
      apiKeys.TEMPLATE_ID,
      {
        topic,
        adress: emailAdress,
        message,
      },
      {
        publicKey: apiKeys.PUBLIC_KEY,
        blockList: {
          watchVariable: 'message',
        },
      }
    )
    .then(
      (response) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log('FAILED...', err);
      }
    );
};

export default sendEmail;

// отправляет Email на передаваемый функции адрес - emailAdress
// тема сообщения - topic
// текст сообщения - message
// в файле apikeys хранятся данные шаблона письма, почтового сервера, публичный ключ. Данные лучше поместить на сервер в .env файл.
