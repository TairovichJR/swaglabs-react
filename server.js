require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY || 'defaultsecretkey';

app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    username: 'admin',
    password: bcrypt.hashSync('abc123!', 8), // Storing hashed password
  },
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login attempt:', { username, password });

  const user = users.find((user) => user.username === username);

  if (!user) {
    console.log('User not found');
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    console.log('Invalid password');
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 1800 }); // 30 minutes
  console.log('Login successful:', { token });

  res.status(200).json({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    next();
  });
};

router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

app.use('/api', router);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
