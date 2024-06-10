import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './utils/schema.jsx',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: 'postgresql://neondb_owner:i5oFPnv2MQeC@ep-lively-butterfly-a5j4bkii.us-east-2.aws.neon.tech/Expense-Tracker?sslmode=require',
  },
});
