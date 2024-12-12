import { useRouteLoaderData } from "react-router";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;
