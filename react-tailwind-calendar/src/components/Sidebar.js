import React from 'react';
import AddEvent from './AddEvent';
import AllEvents from './AllEvents';

function Sidebar(props) {
  return (
    <div className="bg-white shadow-md h-[95%]  rounded-lg w-96 sm:px-5 flex flex-col justify-between items-center pb-5">
      {props.isEvent && <AddEvent selectDate={props.selectDate} addEvent={props.setIsEvent} />}
      {!props.isEvent && <AllEvents selectDate={props.selectDate} addEvent={props.setIsEvent} />}
    </div>
  );
}

export default Sidebar;
