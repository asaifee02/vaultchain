import axios from "axios";

export const createConfig = async (path, method, accessToken) => {
  return {
    url: process.env.REACT_APP_API_SERVER_URL + path,
    method: method || "GET",
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
}

export const callApi = async (options) => {
  try {
    const response = await axios(options.config);
    const { data } = response;
    return {
      data,
      error: null,
    };

  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { response } = error;
      const message = response.statusText || error.message || response.data.message || "HTTP Request Failed";
      return {
        data: null,
        error: {
          message
        }
      };
    }

    return {
      data: null,
      error: {
        message: error.message
      }
    };
  }
};
