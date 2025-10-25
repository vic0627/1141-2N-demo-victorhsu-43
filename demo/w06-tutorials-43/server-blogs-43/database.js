import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.SUPABASE_HOST || "localhost",
  user: process.env.SUPABASE_USER || "pure90719",
  password: process.env.SUPABASE_PASSWORD || "",
  database: process.env.SUPABASE_DATABASE || "wp1_demo_43",
  port: process.env.SUPABASE_PORT || 5432,
});
console.log("Connecting Supabase", pool.options.database);

export default pool;
