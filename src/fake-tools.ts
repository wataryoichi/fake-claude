import {
  TOOL_NAMES, DIRECTORIES, FILE_NAMES, FILE_EXTENSIONS,
  BASH_COMMANDS, GREP_PATTERNS,
} from './data.js';
import { pick, sleep, randInt } from './utils.js';

function fakeFilePath(): string {
  return `${pick(DIRECTORIES)}/${pick(FILE_NAMES)}${pick(FILE_EXTENSIONS)}`;
}

function fakeToolCall(): string {
  const tool = pick(TOOL_NAMES);
  switch (tool) {
    case 'Peek':
      return `\x1b[36m● Peek\x1b[0m ${fakeFilePath()}`;
    case 'Tweak':
      return `\x1b[36m● Tweak\x1b[0m ${fakeFilePath()}`;
    case 'Scribble':
      return `\x1b[36m● Scribble\x1b[0m ${fakeFilePath()}`;
    case 'Zap':
      return `\x1b[36m● Zap\x1b[0m ${pick(BASH_COMMANDS)}`;
    case 'Sniff':
      return `\x1b[36m● Sniff\x1b[0m "${pick(GREP_PATTERNS)}" in ${pick(DIRECTORIES)}/**/*`;
    case 'Rummage':
      return `\x1b[36m● Rummage\x1b[0m ${pick(DIRECTORIES)}/**/*${pick(FILE_EXTENSIONS)}`;
    default:
      return `\x1b[36m● Peek\x1b[0m ${fakeFilePath()}`;
  }
}

export async function showToolCalls(): Promise<{ count: number }> {
  const count = randInt(1, 4);
  for (let i = 0; i < count; i++) {
    console.log(fakeToolCall());
    await sleep(randInt(200, 800));
  }
  return { count };
}
