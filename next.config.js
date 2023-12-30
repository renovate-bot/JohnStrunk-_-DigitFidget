/** @type {import('next').NextConfig} */

let assetPrefix = ''
let basePath = ''

// https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
const isGithubActions = process.env.GITHUB_ACTIONS || false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}


module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
    output: 'export',
    distDir: 'out',
}
