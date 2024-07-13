const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myntra', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const itemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Mock profiles
const profiles = [
  { id: 1, name: 'Influencer 1', imageUrl: 'https://example.com/influencer1.jpg', bio: 'Fashion Enthusiast' },
  { id: 2, name: 'Influencer 2', imageUrl: 'https://example.com/influencer2.jpg', bio: 'Style Blogger' },
  { id: 3, name: 'Influencer 3', imageUrl: 'https://example.com/influencer3.jpg', bio: 'Trend Setter' },
];

app.get('/profiles', (req, res) => {
  res.json(profiles);
});

app.get('/trending', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
