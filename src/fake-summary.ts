import { SUMMARY_MESSAGES } from './data.js';
import { pick, sleep, randInt } from './utils.js';

export async function showSummary(): Promise<void> {
  const msg = pick(SUMMARY_MESSAGES);

  // Stream the summary message word by word
  const words = msg.split(' ');
  for (let i = 0; i < words.length; i++) {
    process.stdout.write(words[i]);
    if (i < words.length - 1) process.stdout.write(' ');
    await sleep(randInt(30, 80));
  }
  console.log('\n');
}
