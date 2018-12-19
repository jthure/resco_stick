
const API_URL = `${window.location.origin}/api`

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
}

const api = (path, urlArgs, opts) => fetch(
  `${API_URL}/${path}${urlArgs ? `?${Object.keys(urlArgs).map(key => `${key}=${urlArgs[key]}`).join('&')}` : ''}`,
  { ...opts },
).then(res => res.json()).then(json => json.data)
const get = (path, args) => api(path, args)
const _post = (path, body, method) => api(path, null, { method: method || 'POST', body: JSON.stringify(body), headers })
const post = (path, body) => _post(path, body)
const put = (path, body) => _post(path, body, 'PUT')

export { get, post, put }
