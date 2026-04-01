import { showSpinner } from './spinner.js';
import { showToolCalls } from './fake-tools.js';
import { showThinking } from './fake-thinking.js';
import { showCode } from './fake-code.js';
import { showSummary } from './fake-summary.js';
import { pick, randInt, sleep, formatNumber } from './utils.js';

// ── Stats ──
let filesRead = 0;
let linesWritten = 0;
let startTime = Date.now();

// ── Header ──
function printHeader(): void {
  const cwd = process.cwd();
  console.log();
  console.log('\x1b[2m╭────────────────────────────────────────────────╮\x1b[0m');
  console.log('\x1b[2m│\x1b[0m \x1b[35m◆\x1b[0m \x1b[1mClaude Code\x1b[0m                      \x1b[2mv1.0.42\x1b[0m \x1b[2m│\x1b[0m');
  console.log('\x1b[2m│\x1b[0m                                                \x1b[2m│\x1b[0m');
  console.log(`\x1b[2m│\x1b[0m \x1b[2m${cwd.padEnd(46)}\x1b[0m \x1b[2m│\x1b[0m`);
  console.log('\x1b[2m╰────────────────────────────────────────────────╯\x1b[0m');
  console.log();

  const tasks = [
    'Refactoring authentication module and optimizing database queries',
    'Implementing real-time notification system with WebSocket support',
    'Migrating legacy REST endpoints to GraphQL schema',
    'Setting up CI/CD pipeline with automated testing and deployment',
    'Optimizing bundle size and implementing code splitting',
    'Building comprehensive test suite for payment processing module',
    'Redesigning state management architecture for better scalability',
  ];
  console.log(`\x1b[1m>\x1b[0m ${pick(tasks)}\n`);
}

// ── Actions ──
type Action = () => Promise<void>;

const actions: Array<{ weight: number; action: Action }> = [
  {
    weight: 30,
    action: async () => {
      await showSpinner(randInt(2000, 5000));
    },
  },
  {
    weight: 25,
    action: async () => {
      const { count } = await showToolCalls();
      filesRead += count;
    },
  },
  {
    weight: 20,
    action: async () => {
      await showThinking();
    },
  },
  {
    weight: 10,
    action: async () => {
      const { lines } = await showCode();
      linesWritten += lines;
    },
  },
  {
    weight: 15,
    action: async () => {
      await showSummary();
    },
  },
];

function pickWeightedAction(): Action {
  const total = actions.reduce((sum, a) => sum + a.weight, 0);
  let r = Math.random() * total;
  for (const { weight, action } of actions) {
    r -= weight;
    if (r <= 0) return action;
  }
  return actions[0].action;
}

// ── Goodbye ──
function printGoodbye(): void {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  console.log();
  console.log('\x1b[2m────────────────────────────────────────────────\x1b[0m');
  console.log();
  console.log('🎉 Just kidding! No code was harmed in this session.');
  console.log();
  console.log(`   Total fake productivity:     ${'█'.repeat(20)} 100%`);
  console.log(`   Session duration:            ${mins}m ${secs}s`);
  console.log(`   Lines pretended to write:    ${formatNumber(linesWritten + randInt(200, 5000))}`);
  console.log(`   Files pretended to read:     ${formatNumber(filesRead + randInt(20, 150))}`);
  console.log(`   Bugs pretended to fix:       ${formatNumber(randInt(3, 42))}`);
  console.log(`   Coffee consumed:             ${randInt(2, 7)} cups ☕`);
  console.log();
}

// ── Main ──
async function main(): Promise<void> {
  printHeader();

  // Handle Ctrl+C gracefully
  process.on('SIGINT', () => {
    process.stderr.write('\r\x1b[K');
    printGoodbye();
    process.exit(0);
  });

  // Loop forever
  while (true) {
    const action = pickWeightedAction();
    await action();
    await sleep(randInt(300, 1500));
  }
}

main();
