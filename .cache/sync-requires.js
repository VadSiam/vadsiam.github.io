const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/404.js"))),
  "component---src-pages-hobby-js": hot(preferDefault(require("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/hobby.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/index.js"))),
  "component---src-pages-projects-index-js": hot(preferDefault(require("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/projects/index.js"))),
  "component---src-pages-who-am-i-js": hot(preferDefault(require("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/who_am_i.js")))
}

