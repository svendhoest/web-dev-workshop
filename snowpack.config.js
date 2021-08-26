module.exports = {
  devOptions: {
    open: 'none',
    output: 'stream'
  },
  buildOptions: {
    out: './build'
  },
  optimize: {
    bundle: true,
    treeshake: true,
    minify: false
  }
}
