/** @type {import('next').NextConfig} */

// https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
const isGithubActions = process.env.GITHUB_ACTIONS || false
let basePath = ''
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
}


module.exports = {
  assetPrefix: basePath + '/',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: 'export',
  distDir: 'out',
}
