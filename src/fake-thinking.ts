import { THINKING_TOPICS } from './data.js';
import { pick, sleep, randInt } from './utils.js';

export async function showThinking(): Promise<void> {
  const topics = pick(THINKING_TOPICS);

  console.log(`\x1b[2m  Thinking...\x1b[0m`);
  await sleep(randInt(500, 1000));

  for (let i = 0; i < topics.length; i++) {
    const prefix = i === topics.length - 1 ? '└─' : '├─';
    console.log(`\x1b[2m  ${prefix} ${topics[i]}\x1b[0m`);
    await sleep(randInt(400, 1200));
  }
  console.log();
}
