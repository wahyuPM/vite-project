export default function fetchData({
    url, method = 'GET', host = import.meta.env.VITE_APP_API_HOST
}) {
    return fetch(`${host}${url}`, {
        method, mode: "cors", headers: { "Content-Type": "application/json" }
    }).then(async (response) => {
        const statusHasResponse = [200, 404];
        const jsonResponse = statusHasResponse.includes(response.status)
            ? await response.json()
            : response;
        if (response.ok) return jsonResponse;
        throw new Error(JSON.stringify(jsonResponse))
    })
}