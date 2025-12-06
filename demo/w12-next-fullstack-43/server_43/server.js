import express from 'express';
import cors from 'cors';

const app = express();

import db from './utils/database.js';

app.use(cors());

app.use('/api/blog_xx', async (req, res, next) => {
  const results = await db.query(`select * from blog_xx`);
  console.log('results', JSON.stringify(results.rows));
  res.json(results.rows);
});

app.use('/api/shop_43/:category', async (req, res, next) => {
  console.log('category', req.params.category);
  const results = await db.query(
    `select * from category2_43, shop2_43 where
    cname = $1 and cid = cat_id`,
    [req.params.category]
  )
  res.json(results.rows);
})

app.use('/', (req, res, next) => {
  res.send('Hsingtai Chung, 123456789');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
