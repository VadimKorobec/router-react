import { useLoaderData } from "react-router";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;
