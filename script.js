// Event data
const events = [
    {
      title: "Coding Class 1",
      date: new Date("2023-08-25"),
      location: "Sarit Center",
      attendees: new Set(["Micheal", "Robert"]),
    },
    {
      title: "Javascript",
      date: new Date("2023-08-28"),
      location: "Zindua Hub Hall 2",
      attendees: new Set(["David", "Linda"]),
    },
    {
      title: "Data Science",
      date: new Date("2023-08-22"),
      location: "Zindua Hub Hall 1",
      attendees: new Set(["Everlyne", "James"]),
    },
  ];
  
  // WeakMap to store event organizers
  const organizers = new Map();
  organizers.set(events[0].title, "Organizer A");
  organizers.set(events[1].title, "Organizer B");
  organizers.set(events[2].title, "Organizer C");
  
  // Function to add an attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
    }
  }
  
  // Function to convert event array to JSON with custom formatting
  function toJSONWithFormattedDate() {
    const formattedEvents = events.map(event => {
      return {
        ...event,
        formattedDate: event.date.toLocaleDateString("en-US"),
      };
    });
    return JSON.stringify(formattedEvents);
  }
  
  // Display properties and values of the first event object
  const firstEvent = events[0];
  console.log("Keys of the first event:", Object.keys(firstEvent));
  console.log("Values of the first event:", Object.values(firstEvent));
  console.log("Entries of the first event:", Object.entries(firstEvent));
  
  // Iterate over events and log title and date
  events.forEach(event => {
    console.log("Title:", event.title);
    console.log("Date:", event.date.toDateString());
  });
  
  // Adding a new attendee to an event
  addAttendee("Conference", "Grace");
  
  // Display events happening in the next 7 days using filter and map
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  const upcomingEvents = events
    .filter(event => event.date >= today && event.date <= nextWeek)
    .map(event => ({
      title: event.title,
      date: event.date.toDateString(),
      location: event.location,
    }));
  
  console.log("Upcoming events in the next 7 days:");
  console.table(upcomingEvents);
  