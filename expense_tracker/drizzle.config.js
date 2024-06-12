import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './utils/schema.jsx',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: "",
  }
});
