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
    

    
    fs.readFile('phrase', 'utf8', (err, data) => {
      if (err) {
          
        res.status(200).json({ message: 'Ошибка при чтении файла' });
        return;
      }
    res.status(200).json({ message: data });
    });
  }
  
