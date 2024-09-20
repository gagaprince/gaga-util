const glob = require('glob')
const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const getEntry = (globPath, pre) => {
  var entries = {},
    basename,
    tmp,
    pathname

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry))
    tmp = path.dirname(entry).replace(pre, '')
    console.log(tmp)
    entries[tmp] = {
      entry,
      title: '',
      template: 'public/index.html',
      filename: `${tmp}/index.html`,
    }
    if (tmp == 'root') {
      // 中转页专属 因为 appx/webview问题
      entries[tmp]['filename'] = 'index.html'
    }
  })
  return entries
}
const entries = getEntry('./src/pages/**/main.js', './src/pages/')
console.log(entries);


module.exports = defineConfig({
  outputDir: 'dist',
  pages: entries,
  transpileDependencies: true
})
