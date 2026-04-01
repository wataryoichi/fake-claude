// Original parody spinner verbs — a mix of real-ish and absurd
export const SPINNER_VERBS = [
  // absurd / original
  'Abracadabraing', 'Astral-projecting', 'Bamboozling', 'Befuddling',
  'Blobulating', 'Boondoggling', 'Booping', 'Bubble-wrapping',
  'Canoodling', 'Catapulting', 'Combobulating', 'Confabulating',
  'Dilly-dallying', 'Discombobulating', 'Doohickeying', 'Doodling',
  'Fiddle-faddling', 'Flibbertigibbeting', 'Flummoxing', 'Frolicking',
  'Gallivanting', 'Gesticulating', 'Gobsmacking', 'Hallucinating',
  'Hodgepodging', 'Honking', 'Hullaballooing', 'Hyperspacing',
  'Jiggery-pokerying', 'Jitterbugging', 'Kerfuffling', 'Lollygagging',
  'Moonwalking', 'Moseying', 'Noodling', 'Perambulating',
  'Pontificating', 'Prestidigitating', 'Procrastinating', 'Puttering',
  'Razzle-dazzling', 'Razzmatazzing', 'Recombobulating', 'Rigmaroling',
  'Shenaniganing', 'Shilly-shallying', 'Skedaddling', 'Smooshing',
  'Sock-hopping', 'Spelunking', 'Thingamajiggling', 'Tomfoolering',
  'Topsy-turvying', 'Waddling', 'Whatchamacalliting', 'Wibbling',
  'Zigzagging',
  // plausible dev-ish
  'Architecting', 'Bootstrapping', 'Calculating', 'Cascading',
  'Choreographing', 'Churning', 'Coalescing', 'Cogitating',
  'Composing', 'Computing', 'Crafting', 'Crunching',
  'Crystallizing', 'Deciphering', 'Deliberating', 'Fermenting',
  'Forging', 'Generating', 'Harmonizing', 'Hashing',
  'Hatching', 'Ideating', 'Incubating', 'Inferring',
  'Manifesting', 'Orchestrating', 'Percolating', 'Pondering',
  'Processing', 'Propagating', 'Puzzling', 'Reticulating',
  'Ruminating', 'Simulating', 'Synthesizing', 'Tinkering',
  'Transmuting', 'Unravelling', 'Vibing', 'Wrangling',
];

export const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

// Parody tool names — clearly not real
export const TOOL_NAMES = ['Peek', 'Tweak', 'Zap', 'Sniff', 'Rummage', 'Scribble'] as const;

export const DIRECTORIES = [
  'src', 'src/components', 'src/utils', 'src/hooks', 'src/api',
  'src/services', 'src/middleware', 'src/models', 'src/types',
  'src/lib', 'src/config', 'src/routes', 'src/controllers',
  'lib', 'lib/core', 'lib/helpers', 'app', 'app/api',
  'pages', 'pages/api', 'tests', 'tests/unit', 'tests/integration',
];

export const FILE_NAMES = [
  'index', 'auth', 'config', 'database', 'handler', 'middleware',
  'router', 'schema', 'service', 'utils', 'helpers', 'types',
  'constants', 'context', 'hooks', 'provider', 'store', 'reducer',
  'actions', 'selectors', 'api', 'client', 'server', 'logger',
  'validator', 'transformer', 'parser', 'formatter', 'cache',
  'queue', 'worker', 'migration', 'seed', 'factory', 'model',
];

export const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.yaml', '.sql'];

export const BASH_COMMANDS = [
  'npm test', 'npm run build', 'npm run lint', 'npx tsc --noEmit',
  'npm run test -- --coverage', 'npx prisma migrate dev',
  'npx prisma generate', 'docker compose up -d',
  'npm run test:integration', 'npx eslint src/ --fix',
  'git diff HEAD~1 --stat', 'npm run typecheck',
  'node scripts/validate.js', 'npx jest --runInBand',
];

export const GREP_PATTERNS = [
  'handleAuth', 'fetchUser', 'validateToken', 'parseResponse',
  'middleware', 'createContext', 'useEffect', 'useState',
  'interface Props', 'export default', 'async function',
  'try {', 'catch (', 'throw new Error', 'console.error',
  'TODO', 'FIXME', 'HACK', 'deprecated',
];

export const THINKING_TOPICS = [
  ['Pretending to analyze structure', 'Imagining key modules', 'Mapping fake dependencies'],
  ['Staring at config files', 'Guessing at TypeScript settings', 'Validating vibes'],
  ['Tracing imaginary data flow', 'Following function ghosts', 'Identifying phantom side effects'],
  ['Reviewing fictional auth logic', 'Checking pretend tokens', 'Verifying fake sessions'],
  ['Examining hypothetical schema', 'Checking nonexistent migrations', 'Validating relationships (emotional)'],
  ['Analyzing imaginary test coverage', 'Identifying untested dreams', 'Planning test strategy (no tests exist)'],
  ['Reviewing API endpoints (all 404)', 'Checking request vibes', 'Verifying response aesthetics'],
  ['Examining error handling philosophy', 'Checking edge cases of reality', 'Verifying fallback emotions'],
  ['Analyzing component family tree', 'Checking prop inheritance drama', 'Identifying shared trauma'],
  ['Reviewing build configuration poetry', 'Checking bundle feelings', 'Optimizing import nostalgia'],
];

export const CODE_SNIPPETS = [
  `export async function authenticateUser(req: Request): Promise<User> {
  const token = req.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) throw new UnauthorizedError('Missing token');

  const decoded = await verifyJWT(token);
  const user = await db.user.findUnique({ where: { id: decoded.sub } });

  if (!user || user.deletedAt) throw new UnauthorizedError('Invalid user');
  return user;
}`,
  `const UserProfile: React.FC<ProfileProps> = ({ userId }) => {
  const { data: user, isLoading } = useQuery(['user', userId], () =>
    fetchUser(userId)
  );

  if (isLoading) return <Skeleton variant="profile" />;

  return (
    <Card>
      <Avatar src={user.avatarUrl} alt={user.name} />
      <Text variant="h2">{user.name}</Text>
      <Text variant="body">{user.bio}</Text>
    </Card>
  );
};`,
  `export class RateLimiter {
  private requests = new Map<string, number[]>();

  async check(key: string, limit: number, windowMs: number): Promise<boolean> {
    const now = Date.now();
    const timestamps = this.requests.get(key) ?? [];
    const valid = timestamps.filter(t => now - t < windowMs);

    if (valid.length >= limit) return false;

    valid.push(now);
    this.requests.set(key, valid);
    return true;
  }
}`,
  `async function runMigration(direction: 'up' | 'down') {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const migrations = await getPendingMigrations(direction);

    for (const migration of migrations) {
      console.log(\`Running \${direction}: \${migration.name}\`);
      await client.query(migration.sql);
      await recordMigration(client, migration.name, direction);
    }

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}`,
  `export function createApiRouter() {
  const router = new Router();

  router.use(corsMiddleware());
  router.use(rateLimitMiddleware({ windowMs: 60_000, max: 100 }));
  router.use(authMiddleware());

  router.get('/users/:id', getUserHandler);
  router.put('/users/:id', validateBody(updateUserSchema), updateUserHandler);
  router.delete('/users/:id', requireRole('admin'), deleteUserHandler);

  router.post('/webhooks', verifySignature, webhookHandler);

  return router;
}`,
  `describe('PaymentService', () => {
  let service: PaymentService;
  let mockGateway: jest.Mocked<PaymentGateway>;

  beforeEach(() => {
    mockGateway = createMockGateway();
    service = new PaymentService(mockGateway);
  });

  it('should process valid payment', async () => {
    mockGateway.charge.mockResolvedValue({ id: 'ch_123', status: 'succeeded' });

    const result = await service.processPayment({
      amount: 2999,
      currency: 'usd',
      customerId: 'cus_456',
    });

    expect(result.status).toBe('succeeded');
    expect(mockGateway.charge).toHaveBeenCalledTimes(1);
  });
});`,
];

export const SUMMARY_MESSAGES = [
  "I've pretended to analyze the codebase and imagined 3 files that need refactoring.",
  "The authentication module might have a race condition. Or not. I'm just guessing.",
  "I found a root cause — just kidding, I made it up. Sounds legit though, right?",
  "Let me pretend to update the database schema. Adding a fake index on `user_id`.",
  "The test suite probably needs updating. I wouldn't know, I can't actually read code.",
  "I'm going to restructure these API routes in my imagination.",
  "The type definitions look inconsistent. Source: I made it up.",
  "I've hallucinated a circular dependency between `auth.ts` and `user.ts`. Fixing it in my dreams.",
  "The current implementation is O(n!). Just kidding, I can't read it. But O(n log n) sounds better.",
  "Let me add some error boundaries. Emotionally, I mean.",
  "The caching layer is probably fine. But I'll pretend to fix it anyway.",
  "I've reviewed the PR changes and found 2 imaginary issues.",
  "The environment configuration is missing. I mean, this whole thing is made up.",
  "I'll extract this pattern into a utility function. In theory.",
  "The WebSocket handler needs cleanup. Like my apartment. Neither will happen.",
];
