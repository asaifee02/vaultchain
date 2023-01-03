import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getPublicResource = async (path="/api", method="GET") => {
  const config = {
    url: `${apiServerUrl}${path}`,
    method: `${method}`,
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getProtectedResource = async (path="/api", method="GET", accessToken) => {
  const config = {
    url: `${apiServerUrl}${path}`,
    method: `${method}`,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};
