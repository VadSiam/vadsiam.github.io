// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-hobby-js": () => import("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/hobby.js" /* webpackChunkName: "component---src-pages-hobby-js" */),
  "component---src-pages-index-js": () => import("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-index-js": () => import("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/projects/index.js" /* webpackChunkName: "component---src-pages-projects-index-js" */),
  "component---src-pages-who-am-i-js": () => import("/Users/vadsiam/HOMEWORK/vadsiam.github.io/src/pages/who_am_i.js" /* webpackChunkName: "component---src-pages-who-am-i-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/vadsiam/HOMEWORK/vadsiam.github.io/.cache/data.json")

