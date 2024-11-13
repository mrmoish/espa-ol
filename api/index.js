// pages/api/index.js

const { MongoClient } = require('mongodb');

let client;
let db;

// Функция для подключения к базе данных
async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db('your_database_name'); // Укажите название вашей базы данных
  }
  return db;
}

export default async function handler(req, res) {
  try {
    // Подключаемся к базе данных
    const db = await connectToDatabase();
    const collection = db.collection('user_agents'); // Замените на имя вашей коллекции

    // Извлекаем User-Agent из заголовков
    const userAgent = req.headers['user-agent'];

    // Сохраняем User-Agent в базу данных
    await collection.insertOne({ userAgent, timestamp: new Date() });

    res.status(200).json({ message: 'User-Agent успешно сохранен', userAgent });
  } catch (error) {
    console.error('Ошибка при сохранении User-Agent:', error);
    res.status(500).json({ error: 'Ошибка при сохранении User-Agent' });
  }
}
