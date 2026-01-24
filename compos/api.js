const api = async (url, details) => {
  console.log("API Call:", url);
  console.log("API details : ",details)

  try {
    const res = await fetch(url, details);

    console.log("Status:", res.status);

    let data;
    try {
      data = await res.json();
      console.log(data)
    } catch (jsonErr) {
      console.error("JSON Parsing Failed:", jsonErr.message);
      throw new Error("Invalid JSON response from server");
    }

    if (!res.ok) {
      console.error("Server Error:", data?.message || "Unknown server error");
      return {
        ok: false,
        status: res.status,
        message: data?.message || "Request failed",
        data
      };
    }

    return {
      ok: true,
      status: res.status,
      data
    };

  } catch (networkErr) {
    console.error("Network/Fetch Error:", networkErr.message);
    return {
      ok: false,
      status: null,
      message: "Network error or server unreachable",
      error: networkErr.message
    };
  }
};

export default api;
