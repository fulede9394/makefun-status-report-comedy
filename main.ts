import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Status report: 47 tasks done, nothing learned, cried in the logs.
const LINE =
  "This week I finished 47 tasks, learned nothing, and cried twice — both times in the logs, where nobody looks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
