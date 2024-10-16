export const fetchData = async (url, method = 'GET', body = null) => {
  const headers = { 'Content-Type': 'application/json' };

  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Failed to fetch data');
    return await response.json();
  } catch (error) {
    console.error('Error in API call:', error);
    throw error;
  }
};
