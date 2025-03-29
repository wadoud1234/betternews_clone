import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { z } from "zod";

config();

const EnvSchema = z.object({
    DATABASE_URL: z.string(),
    PORT: z.coerce.number()
})

const processEnv = EnvSchema.parse(process.env)
const queryClient = postgres(processEnv.DATABASE_URL);
export const db = drizzle(queryClient)


