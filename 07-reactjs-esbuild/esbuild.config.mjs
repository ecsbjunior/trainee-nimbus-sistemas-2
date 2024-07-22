import esbuild from 'esbuild';

esbuild.buildSync({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outfile: './bundle.js',
  loader: { '.js': 'jsx' },
  minify: true,
});
