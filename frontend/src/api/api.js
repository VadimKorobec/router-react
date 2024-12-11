import { json } from "react-router-dom";

export const fetchEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });

    return json({ message: "Could not fetch events." }, { status: 500 });
  }

  return response;
};
