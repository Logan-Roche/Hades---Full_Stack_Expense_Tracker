import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon("postgresql://neondb_owner:i5oFPnv2MQeC@ep-lively-butterfly-a5j4bkii.us-east-2.aws.neon.tech/Expense-Tracker?sslmode=require");
const db = drizzle(sql,{schema});