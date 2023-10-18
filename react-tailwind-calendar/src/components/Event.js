import React from 'react';

function Event(props) {
  return (
    <div className="w-[90%] bg-[#D4FCC9] border border-[#9fe28c] flex p-1 rounded-sm">
      <div className="w-[5px]  bg-[#428d2d] rounded-full me-2"></div>
      <p>{props.title}</p>
    </div>
  );
}

export default Event;
