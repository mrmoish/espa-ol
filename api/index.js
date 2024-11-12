// api/server.js

const fs = require('fs');
export default function handler(req, res) {

    
    try {
      fs.writeFileSync('/phrase', 'Hello, World!');
      console.log('Запись успешно завершена.');
    } catch (err) {
      console.error('Ошибка при записи в файл:', err);
    }


    
    fs.readFile('/phrase', 'utf8', (err, data) => {
      if (err) {
          
        res.status(200).json({ message: 'Ошибка при чтении файла' });
        return;
      }
    res.status(200).json({ message: data });
    });
  }
  
