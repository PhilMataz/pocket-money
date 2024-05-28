import dotenv from "dotenv";
import { exec } from "child_process";

// Load the environment variables from the .env file
dotenv.config();

// Access the SUPABASE_PROJECT_ID environment variable
const projectId = process.env.SUPABASE_PROJECT_ID;

if (!projectId) {
  console.error(
    "SUPABASE_PROJECT_ID is not defined in the environment variables.",
  );
  process.exit(1);
}

const command = `bunx supabase gen types typescript --project-id ${projectId} > types/database.ts`;

console.log("Generating Supabase types...");
exec(command, (error) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log("Successfully genrated supabase types.");
});
