import { useLoaderData } from 'react-router';

import EventForm from '../components/EventForm'

const EditEventPage = () => {
    const data = useLoaderData();
    const event = data.event;
    
    return<EventForm event={event}/>
}

export default EditEventPage;