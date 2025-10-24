import React from 'react'

const Greeting = (timeOfDay) => {
  return timeOfDay === 'morning' ? (
    <h1>Good Morning</h1>
  ) : (
    <h1>Good Rest of the day</h1>
  )
};

export default Greeting;

