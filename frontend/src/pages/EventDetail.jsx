import { useLoaderData } from "react-router";

import EventItem from '../components/EventItem' 

const EventDetailPage = () => {
  const data = useLoaderData()
  const event = data.event;
  

  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;

