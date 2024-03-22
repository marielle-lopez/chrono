# <img src='./logo-lg.png' alt='Chrono logo' width='300'/>

Introducing Chrono, your ultimate calendar companion designed to streamline your schedule while keeping you weather-ready. Chrono seamlessly blends intuitive event management with up-to-date weather forecasts, ensuring you're always prepared for whatever the day brings.

Sleek and user-friendly, Chrono offers a clean interface that prioritizes functionality without sacrificing style. Its intuitive design makes navigating your schedule a breeze, allowing you to focus on what matters most—making the most of your time.

## Resources

- [Inter font](https://fonts.google.com/specimen/Inter)
- [MuseoModerno font](https://fonts.google.com/specimen/MuseoModerno)

### Bits and Bobs

- [Array of all days in the week of a given date](https://stackoverflow.com/questions/71179131/how-do-i-get-an-array-of-all-days-in-the-week-given-the-current-date-in-javascri)

## Task Completion History

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
