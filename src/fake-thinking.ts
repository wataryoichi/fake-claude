import { THINKING_TOPICS } from './data.js';
import { pick, sleep, randInt } from './utils.js';

export async function showThinking(): Promise<void> {
  const topics = pick(THINKING_TOPICS);

  const labels = ['Thinking...', 'Pretending to think...', 'Pondering deeply...', 'Hmm...', 'Faking it...'];
  console.log(`\x1b[2m  ${pick(labels)}\x1b[0m`);
  await sleep(randInt(500, 1000));

  for (let i = 0; i < topics.length; i++) {
    const prefix = i === topics.length - 1 ? '└─' : '├─';
    console.log(`\x1b[2m  ${prefix} ${topics[i]}\x1b[0m`);
    await sleep(randInt(400, 1200));
  }
  console.log();
}
