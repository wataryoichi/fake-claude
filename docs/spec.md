# fake-claude: Claude Codeで仕事してる風Jokeアプリ

## コンセプト

ターミナルで実行すると、あたかもClaude Codeが複雑なタスクに取り組んでいるかのような表示をひたすら続けるCLIアプリ。上司や同僚の前で「AIと一緒にバリバリ仕事してます」感を演出できる。

## 表示要素

### 1. スピナー + 動詞メッセージ（Claude Code風）

ローディングスピナーとともに、Claude Codeのスピナー動詞リストからランダムに選んだ動詞を表示。

```
⠋ Architecting response...
⠙ Cerebrating deeply...
⠹ Synthesizing code...
```

数秒ごとに動詞が切り替わる。

### 2. フェイク・ツール呼び出し表示

Claude Codeがツールを使っているかのような表示を挟む。

```
● Read src/utils/auth.ts
● Edit src/components/Login.tsx
● Bash npm test
● Grep "handleAuth" in src/**/*.ts
```

ファイルパスやコマンドはそれっぽいものをランダム生成。

### 3. フェイク・思考中表示

Claude Codeの思考プロセスっぽい表示。

```
  Thinking...
  ├─ Analyzing project structure
  ├─ Identifying dependencies
  └─ Planning implementation
```

### 4. フェイク・コード出力

たまにコードの断片がストリーミングされているかのように1文字ずつ表示。

```typescript
async function handleAuthentication(req: Request) {
  const token = await validateToken(req.headers.authorization);
  // ...
```

### 5. フェイク・進捗サマリ

たまに進捗報告っぽいテキストを表示。

```
I've analyzed the codebase and found 3 files that need updating.
Let me refactor the authentication module...
```

## 表示フロー

1. 起動時にClaude Code風のヘッダーを表示
2. 以下をランダムな順序・間隔で繰り返す:
   - スピナー + 動詞（2〜5秒）
   - ツール呼び出し表示（瞬時〜1秒）
   - 思考中表示（1〜3秒）
   - コード出力（3〜8秒、たまに）
   - 進捗サマリ（たまに）
3. Ctrl+C で終了。終了時にジョークメッセージを表示

## 技術仕様

- **言語**: TypeScript (Bun runtime)
- **依存**: 最小限（外部ライブラリはなるべく使わない）
- **エントリポイント**: `src/index.ts`
- **実行方法**: `bun run src/index.ts` または `npx fake-claude`

## ファイル構成

```
src/
  index.ts          # エントリポイント・メインループ
  spinner.ts        # スピナーアニメーション・動詞リスト
  fake-tools.ts     # フェイクツール呼び出し生成
  fake-code.ts      # フェイクコード出力生成
  fake-thinking.ts  # 思考中表示生成
  fake-summary.ts   # 進捗サマリ生成
  data.ts           # ファイルパス・変数名などのデータ
```

## 起動時ヘッダー例

```
╭────────────────────────────────────────╮
│ ◆ Claude Code                    v1.0  │
│                                        │
│ /home/user/my-awesome-project          │
╰────────────────────────────────────────╯

> Refactoring authentication module and optimizing database queries
```

## 終了時メッセージ例

```
🎉 Just kidding! No code was harmed in this session.
   Total fake productivity: ████████████████ 100%
   Lines of code pretended to write: 4,827
   Files pretended to read: 142
```

## 将来の拡張アイデア

- `--speed` オプション: 表示速度の調整（`chill`, `normal`, `crunch`）
- `--project` オプション: プロジェクト名を指定
- `--task` オプション: タスク内容を指定（ヘッダーに表示）
- パイプ対応: 実際のプロジェクトのファイル一覧を読み込んでよりリアルに
