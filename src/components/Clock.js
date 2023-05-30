import React, { useState } from 'react';

const Clock = () => {
  let timeClock = new Date().toLocaleTimeString();
  const [time, setTime] = useState(timeClock);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <>
      {time}
    </>
  );
};

export default Clock;
