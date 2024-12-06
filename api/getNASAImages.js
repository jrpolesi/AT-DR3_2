import { BASE_URL, defaultHeaders } from "./constants.js";

export async function getNASAImages(options = {}) {
  const { query, pageSize, nasaId, ...restOptions } = options;

  const urlParams = new URLSearchParams({
    q: query,
    media_type: "image",
    ...restOptions,
  });

  const url = `${BASE_URL}/search?${urlParams}`;

  const response = await fetch(url, {
    method: "GET",
    headers: defaultHeaders,
  });

  const body = await response.json();

  if (!response.ok) {
    return Promise.reject({ body, response });
  }

  return Promise.resolve({ body, response });
}
