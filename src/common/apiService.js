const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export async function getData(path, queryParams = {}) {
	const url = new URL(`${API_URL}/${path}`)

	Object.entries(queryParams).forEach(([key, value]) => {
		url.searchParams.append(key, String(value))
	})

	url.searchParams.append('key', API_KEY)

	const res = await fetch(url)

	return res.json()
}
