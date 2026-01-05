const api = async (url, details) => {
  console.log("in api fun")
  try {
    
    const res = await fetch(url, details);

    console.log("Status:", res.status);
    console.log(res)

    const data = await res.json();
    console.log("Response Data:", data);
    return data;
  } catch (err) {
    console.error("API call failed:", err.message);
  }
};

export default api;
