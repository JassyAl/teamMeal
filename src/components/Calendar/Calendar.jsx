import React, { useRef, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import './Calendar.css'; // Import the CSS file here
function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const titleRef = useRef();
  const startRef = useRef();
  const endRef = useRef();

  useEffect(() => {
    if (selectedEvent) {
      tippy('.fc-event-title', {
        content: selectedEvent.extendedProps.description,
        allowHTML: true,
        placement: 'top',
      });
    }
  }, [selectedEvent]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const start = startRef.current.value;
    const end = endRef.current.value;
    const newEvent = { title, start, end };
    setEvents(prevEvents => []);
    setEvents(prevEvents => [...prevEvents, newEvent]);
    titleRef.current.value = '';
    startRef.current.value = '';
    endRef.current.value = '';
  }

  function handleEventClick(info) {
    setSelectedEvent(info.event);
  }

  function handlePopupClose() {
    setEvents(prevEvents => prevEvents.filter(event => event !== selectedEvent));
    setSelectedEvent(null);
  }

  function handleDelete() {
    selectedEvent.remove();
    handlePopupClose();
  }

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    events: events,
    eventClick: handleEventClick,
    eventDidMount: (info) => {
      const tooltip = info.el.querySelector('.fc-event-title');
      const description = info.event.extendedProps.description;
      tooltip.setAttribute('title', description);
    },
  };

  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar {...calendarOptions} key={events.length} />
      {selectedEvent && (
        <div className="popup">
          <h2>{selectedEvent.title}</h2>
          <button onClick={handleDelete}>Delete</button>
          <button>Edit</button>
          <button onClick={handlePopupClose}>Close</button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>Event Title:</label>
        <input type="text" ref={titleRef} required />
        <br />
        <label>Start Date:</label>
        <input type="date" ref={startRef} required />
        <br />
        <label>End Date:</label>
        <input type="date" ref={endRef} required />
        <br />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default Calendar;
