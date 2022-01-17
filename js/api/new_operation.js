import { API_KEY, API_URL } from "./api_data";

/**
 * Fetch all tasks
 * @param {object} body - Object containing informations about newly added task
 * @param {function} successCallback - Function that saves incoming data
 */
export const addOperation = async (id, body, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
      method: 'POST',
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.error || typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }

    successCallback(data.data);
  } catch (err) {
    console.log(err);
  }
};