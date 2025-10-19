import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST || "localhost",
  user: process.env.PGUSER || "pure90719",
  password: process.env.PGPASSWORD || "",
  database: process.env.PGDATABASE || "wp1_demo_43",
  port: process.env.PGPORT || 5432,
});

const db = {
  async query(text, params) {
    const client = await pool.connect();
    try {
      const res = await client.query(text, params);
      return res.rows;
    } catch (err) {
      console.error("❌ DB Query Error:", err);
      throw err;
    } finally {
      client.release();
    }
  },
};

export default db;
