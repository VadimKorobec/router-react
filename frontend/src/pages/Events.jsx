import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  console.log(data);

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;
