import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./Calendar.css"; // Import the CSS file here
import { v4 as uuidv4 } from 'uuid'; 

function Calendar() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const titleRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    if (selectedEvent) {
      tippy(".fc-event-title", {
        content: selectedEvent.extendedProps.description,
        allowHTML: true,
        placement: "top",
      });
    }
  }, [selectedEvent]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("calendarEvents"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const start = startRef.current.value;
    const end = endRef.current.value;
    const description = descRef.current.value; 
    const newEvent = { id: uuidv4(), title, description, start, end };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    titleRef.current.value = "";
    startRef.current.value = "";
    endRef.current.value = ""; 
    descRef.current.vale = ""; 
  }

  function handleEventClick(info) {
    setSelectedEvent(info.event);
    console.log(info.event);
    const description = info.event.extendedProps.description;
  }

  function deleteEvent() {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== selectedEvent.id)
    );
    setSelectedEvent(null);
  } 
function handlePopupClose() {
  setSelectedEvent(null); 
} 

  function handleDelete() {
    selectedEvent.remove();   
   //  setEvents((prevEvents) => []);
    deleteEvent(); 
    console.log(events);
    
  }

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    editable: true,
    selectable: true,
    events: events,
    eventClick: handleEventClick,
    eventDidMount: (info) => {
      const tooltip = info.el.querySelector(".fc-event-title");
      const description = info.event.extendedProps.description;
      tooltip.setAttribute("title", description);
    },
  };

  return (
    <div>
      <h1>Calendar</h1>
<div style={{
  justifyContent: "center",
  paddingLeft: 50,  
  paddingRight: 50,
  alignItems: "center",
}}>
  <FullCalendar {...calendarOptions} key={events.length} />
  {selectedEvent && (
    <div className="popup-box">
      <div className="popup-content">
      <span className="close-btn" onClick={handlePopupClose}>&times;</span>
        <h2>{selectedEvent.title}</h2>
        <p>{selectedEvent.extendedProps.description}</p>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      <button>Edit</button>
        <button onClick={handlePopupClose}>Close</button>
      </div>
    </div>
  )}
</div>
      {/* <div > */}
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <label>Meal Plan Title:</label>
        <input type="text" ref={titleRef} required />
        <br />
  <label>Description:</label>
  <input type="text" ref={descRef} required />
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
    // </div>
  );
}

export default Calendar;
