import { SERVER } from './config';

export const getEvents = async () => {
  try {
    const res = await fetch(`${SERVER}/api/events`);
    const { data, success } = await res.json();
    if (success) {
      return data;
    }
    throw new Error("Couldn't get events");
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createEvent = async (event) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    };

    const res = await fetch(`${SERVER}/api/events`, config);
    const { response, success } = await res.json();
    if (success) {
      return response;
    }
    throw new Error("Couldn't create event");
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
