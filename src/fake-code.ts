import { CODE_SNIPPETS } from './data.js';
import { pick, sleep, randInt } from './utils.js';

export async function showCode(): Promise<{ lines: number }> {
  const snippet = pick(CODE_SNIPPETS);
  const lines = snippet.split('\n');

  for (const line of lines) {
    // Stream each character with a tiny delay for realism
    for (let i = 0; i < line.length; i++) {
      process.stdout.write(`\x1b[32m${line[i]}\x1b[0m`);
      await sleep(randInt(5, 25));
    }
    process.stdout.write('\n');
    await sleep(randInt(30, 100));
  }
  console.log();

  return { lines: lines.length };
}
