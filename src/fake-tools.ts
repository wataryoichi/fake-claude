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
    case 'Read':
      return `\x1b[36m● Read\x1b[0m ${fakeFilePath()}`;
    case 'Edit':
      return `\x1b[36m● Edit\x1b[0m ${fakeFilePath()}`;
    case 'Write':
      return `\x1b[36m● Write\x1b[0m ${fakeFilePath()}`;
    case 'Bash':
      return `\x1b[36m● Bash\x1b[0m ${pick(BASH_COMMANDS)}`;
    case 'Grep':
      return `\x1b[36m● Grep\x1b[0m "${pick(GREP_PATTERNS)}" in ${pick(DIRECTORIES)}/**/*`;
    case 'Glob':
      return `\x1b[36m● Glob\x1b[0m ${pick(DIRECTORIES)}/**/*${pick(FILE_EXTENSIONS)}`;
    default:
      return `\x1b[36m● Read\x1b[0m ${fakeFilePath()}`;
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
