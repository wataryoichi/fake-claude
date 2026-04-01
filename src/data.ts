// Spinner verbs from Claude Code
export const SPINNER_VERBS = [
  'Accomplishing', 'Actioning', 'Actualizing', 'Architecting', 'Baking',
  'Beaming', "Beboppin'", 'Befuddling', 'Billowing', 'Blanching',
  'Bloviating', 'Boogieing', 'Boondoggling', 'Booping', 'Bootstrapping',
  'Brewing', 'Bunning', 'Burrowing', 'Calculating', 'Canoodling',
  'Caramelizing', 'Cascading', 'Catapulting', 'Cerebrating', 'Channeling',
  'Channelling', 'Choreographing', 'Churning', 'Clauding', 'Coalescing',
  'Cogitating', 'Combobulating', 'Composing', 'Computing', 'Concocting',
  'Considering', 'Contemplating', 'Cooking', 'Crafting', 'Creating',
  'Crunching', 'Crystallizing', 'Cultivating', 'Deciphering', 'Deliberating',
  'Determining', 'Dilly-dallying', 'Discombobulating', 'Doing', 'Doodling',
  'Drizzling', 'Ebbing', 'Effecting', 'Elucidating', 'Embellishing',
  'Enchanting', 'Envisioning', 'Evaporating', 'Fermenting', 'Fiddle-faddling',
  'Finagling', 'Flambéing', 'Flibbertigibbeting', 'Flowing', 'Flummoxing',
  'Fluttering', 'Forging', 'Forming', 'Frolicking', 'Frosting',
  'Gallivanting', 'Galloping', 'Garnishing', 'Generating', 'Gesticulating',
  'Germinating', 'Gitifying', 'Grooving', 'Gusting', 'Harmonizing',
  'Hashing', 'Hatching', 'Herding', 'Honking', 'Hullaballooing',
  'Hyperspacing', 'Ideating', 'Imagining', 'Improvising', 'Incubating',
  'Inferring', 'Infusing', 'Ionizing', 'Jitterbugging', 'Julienning',
  'Kneading', 'Leavening', 'Levitating', 'Lollygagging', 'Manifesting',
  'Marinating', 'Meandering', 'Metamorphosing', 'Misting', 'Moonwalking',
  'Moseying', 'Mulling', 'Mustering', 'Musing', 'Nebulizing',
  'Nesting', 'Newspapering', 'Noodling', 'Nucleating', 'Orbiting',
  'Orchestrating', 'Osmosing', 'Perambulating', 'Percolating', 'Perusing',
  'Philosophising', 'Photosynthesizing', 'Pollinating', 'Pondering',
  'Pontificating', 'Pouncing', 'Precipitating', 'Prestidigitating',
  'Processing', 'Proofing', 'Propagating', 'Puttering', 'Puzzling',
  'Quantumizing', 'Razzle-dazzling', 'Razzmatazzing', 'Recombobulating',
  'Reticulating', 'Roosting', 'Ruminating', 'Sautéing', 'Scampering',
  'Schlepping', 'Scurrying', 'Seasoning', 'Shenaniganing', 'Shimmying',
  'Simmering', 'Skedaddling', 'Sketching', 'Slithering', 'Smooshing',
  'Sock-hopping', 'Spelunking', 'Spinning', 'Sprouting', 'Stewing',
  'Sublimating', 'Swirling', 'Swooping', 'Symbioting', 'Synthesizing',
  'Tempering', 'Thinking', 'Thundering', 'Tinkering', 'Tomfoolering',
  'Topsy-turvying', 'Transfiguring', 'Transmuting', 'Twisting',
  'Undulating', 'Unfurling', 'Unravelling', 'Vibing', 'Waddling',
  'Wandering', 'Warping', 'Whatchamacalliting', 'Whirlpooling', 'Whirring',
  'Whisking', 'Wibbling', 'Working', 'Wrangling', 'Zesting', 'Zigzagging',
];

export const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export const TOOL_NAMES = ['Read', 'Edit', 'Bash', 'Grep', 'Glob', 'Write'] as const;

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
  ['Analyzing project structure', 'Identifying key modules', 'Mapping dependencies'],
  ['Reading configuration files', 'Checking TypeScript settings', 'Validating paths'],
  ['Understanding data flow', 'Tracing function calls', 'Identifying side effects'],
  ['Reviewing authentication logic', 'Checking token validation', 'Verifying session handling'],
  ['Examining database schema', 'Checking migrations', 'Validating relationships'],
  ['Analyzing test coverage', 'Identifying untested paths', 'Planning test strategy'],
  ['Reviewing API endpoints', 'Checking request validation', 'Verifying response formats'],
  ['Examining error handling', 'Checking edge cases', 'Verifying fallback behavior'],
  ['Analyzing component hierarchy', 'Checking prop drilling', 'Identifying shared state'],
  ['Reviewing build configuration', 'Checking bundle size', 'Optimizing imports'],
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
  "I've analyzed the codebase and identified 3 files that need refactoring.",
  "The authentication module has a potential race condition. Let me fix that.",
  "I found the root cause — the middleware isn't properly awaiting the async validation.",
  "Let me update the database schema to add the missing index on `user_id`.",
  "The test suite needs updating to cover the new edge cases I discovered.",
  "I'm restructuring the API routes to follow a more RESTful pattern.",
  "The type definitions are inconsistent across modules. I'll unify them.",
  "I've identified a circular dependency between `auth.ts` and `user.ts`. Refactoring now.",
  "The current implementation has O(n²) complexity. I'll optimize it to O(n log n).",
  "Let me add proper error boundaries to prevent cascading failures.",
  "The caching layer isn't invalidating correctly on updates. Fixing the TTL logic.",
  "I've reviewed the PR changes and found 2 issues that need addressing before merge.",
  "The environment configuration is missing production-specific overrides. Adding those now.",
  "I'll extract this repeated pattern into a shared utility function.",
  "The WebSocket connection handler needs proper cleanup on disconnect.",
];
