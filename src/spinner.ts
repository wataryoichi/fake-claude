import { SPINNER_FRAMES, SPINNER_VERBS } from './data.js';
import { pick, sleep } from './utils.js';

export async function showSpinner(durationMs: number): Promise<void> {
  const verb = pick(SPINNER_VERBS);
  const suffixes = ['response...', 'code...', 'solution...', 'changes...', 'output...', '...'];
  const text = `${verb} ${pick(suffixes)}`;
  let frame = 0;

  const interval = setInterval(() => {
    process.stderr.write(`\r\x1b[33m${SPINNER_FRAMES[frame % SPINNER_FRAMES.length]}\x1b[0m ${text}`);
    frame++;
  }, 80);

  await sleep(durationMs);
  clearInterval(interval);
  process.stderr.write(`\r\x1b[K`);
}
