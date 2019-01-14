export const createPrettyScript = () => {
  const script = document.createElement('script')
  script.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'
  document.body.appendChild(script)
}