const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

const db = require('./config/config')

const productsRoutes = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');

const app = express();
const ports = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors({
  origin: "https://sneaker-store-api.onrender.com",
  credentials: true,
  methods: "POST, GET, PUT"
}))

app.use(cookieParser())


app.listen(ports, () => console.log(`listening on port ${ports}`));

db.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });

app.get('/', (req, res) =>{
    res.json({message: 'Hello from server'})
})
app.use('/products', productsRoutes);
app.use('/users', userRoute);

