function updateOptions(options) {
    const token = localStorage.getItem("id_token");
    const update = { ...options };
      update.headers = {
        ...update.headers,
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
      };
    return update;
  }
  
  export default function fetchWithJWT(url, options) {
    return fetch(url, updateOptions(options));
  }