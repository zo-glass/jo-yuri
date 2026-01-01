const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export async function getData(path, queryParams = {}) {
	if (!API_URL) { throw new Error('API_URL undefined')}
	
	const url = new URL(`${API_URL}/${path}`)

	Object.entries(queryParams).forEach(([key, value]) => {
		if (value != null) {
			url.searchParams.append(key, String(value))
		}
	})

	url.searchParams.append('key', API_KEY)

	const res = await fetch(url)

	if (!res.ok) {
		console.error(`API request failed: ${res.status} ${res.statusText}`)
		throw new Error(`API request failed: ${res.status} ${res.statusText}`)
	}

	return res.json()
}
