// api/server.js

const fs = require('fs');
export default function handler(req, res) {

    fs.appendFile('phrase', '\nДобавляем новую строку', (err) => {
      if (err) {
        console.error('Ошибка при добавлении данных:', err);
        return;
      }
      console.log('Данные успешно добавлены.');
    });
    res.status(200).json({ message: 'Hello from Vercel Serverless Function!' });
  }
  
