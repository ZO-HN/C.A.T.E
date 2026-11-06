export function GetStartedPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-8">
      <h1 className="text-3xl font-semibold">Get started with C.A.T.E</h1>
      <p>C.A.T.E is your local-first AI assistant, built on OpenJarvis.</p>
      <h2 className="text-xl font-semibold">Run from source</h2>
      <pre className="overflow-x-auto rounded-lg border p-4"><code>{`git clone https://github.com/ZO-HN/C.A.T.E.git
cd C.A.T.E
uv sync --python 3.12 --extra server --no-default-groups
uv run --no-sync cate gui`}</code></pre>
      <p>Use Settings to connect a local Ollama model or a supported cloud provider. Model downloads and provider access are configured separately.</p>
      <p>C.A.T.E desktop installers are not published yet.</p>
      <a className="underline" href="https://github.com/ZO-HN/C.A.T.E" target="_blank" rel="noopener noreferrer">C.A.T.E source repository</a>
    </main>
  );
}
