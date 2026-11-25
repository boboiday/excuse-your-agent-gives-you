import * as fs from "node:fs";

const LINE = "You asked me to ship it Friday. The compiler flagged it at 4, flagged it again at 5, and at 6 it gave up and wrote: 'fine, ship it — see what happens.'";

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry must be 1-199 characters, got ${chars}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
  process.stdout.write(LINE + "\n");
}

main();
