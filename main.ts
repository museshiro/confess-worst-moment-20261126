import { mkdirSync, writeFileSync } from "node:fs";

const partA = "I pasted the staging .env into #general while 'summarizing' it for Priya, including DB_PASSWORD, ";
const partB = "because I thought that channel was the private audit thread.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
