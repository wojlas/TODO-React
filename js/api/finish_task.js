import { API_KEY, API_URL } from "./api_data";

/**
 * Fetch all tasks
 * @param {string} id
 * @param {object} body - Object containing informations about newly added task
 * @param {function} successCallback - Function that saves incoming data
 */
export const finishTask = async (id, body, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.error || typeof successCallback !== "function") {
    console.log(data.error);
    console.log(typeof successCallback);
      throw new Error("Błąd!");
    }

    successCallback(data.data);
  } catch (err) {
    console.log(err);
  }
};