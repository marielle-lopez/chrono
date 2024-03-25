# <img src='./logo-lg.png' alt='Chrono logo' width='300'/>

Introducing Chrono, your ultimate calendar companion designed to streamline your schedule while keeping you weather-ready. Chrono seamlessly blends intuitive event management with up-to-date weather forecasts, ensuring you're always prepared for whatever the day brings.

Sleek and user-friendly, Chrono offers a clean interface that prioritizes functionality without sacrificing style. Its intuitive design makes navigating your schedule a breeze, allowing you to focus on what matters most—making the most of your time.

## Current and Future Plans

To see what I'm currently working on, what's on the agenda, completed tasks, as well as found and fixed bugs, take a look at my [project board](https://github.com/users/marielle-lopez/projects/6/views/1) for Chrono.

## Resources

- [Inter font](https://fonts.google.com/specimen/Inter)
- [Sora font](https://fonts.google.com/specimen/Sora)

### Bits and Bobs

- [Array of all days in the week of a given date](https://stackoverflow.com/questions/71179131/how-do-i-get-an-array-of-all-days-in-the-week-given-the-current-date-in-javascri)
- [Type 'FieldError' is not assignable to type 'string'](https://github.com/orgs/react-hook-form/discussions/8915)

## Task Completion History

### 25 March 2024

- Designed and constructed `EventCard` component
  - This component will display in a `Cell` of a corresponding date, showing the event title and time
  - Ran into a small bug where content of rendered `EventCard` components would appear on top of the `Modal` component; this was simply fixed by moving the call for the `Modal` component to the end in the return statement in `App.tsx`
- A user can create an event which will be saved in an array named `events` saved in state
  - The event will render in a `Cell` with a matching start date; works for all views
  - There is currently a bug associated with colour styling in the `EventCard` component
- To make the `Modal` component dynamic in terms of its body content, I need to create a function that will return a component which I will use to conditionally render the `children` prop of the `Modal` component
  - Initially, I was thinking about storing TSX in state, however this is bad practice; state is for data
- Updated logo design of Chrono
- Rendered `EventCard` components are clickable
  - When clicked, `Modal` component appears with information of the related event

### 24 March 2024

- Re-designed Chrono logo and utilised this new version
  - The first version was simple and minimalistic, however I did not feel as if it matched the modern and sleek vibe I was going for
- Created `EventForm` component which holds a form a user can fill out to offer information of an event they would like to create on a certain date and time
  - The form uses React Hook Form and Zod to handle form submission and validation, respectively
  - I ran into a small bug with form submission, however I realised that in order for a form to be submitted, the form must have a button between its `<form></form>` tags
- Made the `Modal` component further dynamic by allowing it to receive the `children` prop, which will be the 'body' content of the modal
  - Additionally, I made the footer of the `Modal` component optional since `EventForm` has its own button

### 23 March 2024

- Adjust styling of `NavBar` component
  - Apply specific styling to active `NavLink`s
  - Modify width of content
  - Alter alignment and spacing
- Update background overlay styling of `Modal` component to be also dark, not just blurred
- Create `MainWrapper` container component to reduce repeated styling for pages originally using the `<main>` tag, then implemented the `MainWrapper` container in page components

### 22 March 2024

- Fully implemented 'Week' view
  - User is able to switch between adjacent weeks using the decrement and increment buttons
- Text between the decrement and increment buttons of the `NavBar` component is now appropriate to the selected view
- Allowed `Modal` component to have its appearance triggered when non-dummy `Cell` components are clicked by a user
- Added `type` prop to `Button` component to alter its appearance based on the value of `type`
- Updated styling of `Modal` component and implemented `Button` component
- Added Chrono logo to the `NavBar` component

### 20 March 2024

- Worked on designing the Chrono logo
- Begun constructing the `Modal` component to be dynamic
- Made progress with the 'Week' view

### 19 March 2024

- Made the 'Day' view functional, where the user can switch between adjacent days using the provided decrement and increment buttons
  - This is also possible between days bordering a month or even a year

### 18 March 2024

- Installed Tailwind CSS to handle styling
- Also installed React Router DOM and React Icons
- Created a `Cell` component to represent each day of a month, and a corresponding `CellList` container component
- Created a `NavBar` component to allow a user to switch between 'Day', 'Week', or 'Month' view
  - At the moment, the user can also switch between adjacent months using the provided increment and decrement buttons
- The 'Day' and 'Week' views are currently not implemented

### 17 March 2024

- Completed the design mockup of Chrono

### 16 March 2024

- Basic React application setup
- Begun creating design mockup of the UI
