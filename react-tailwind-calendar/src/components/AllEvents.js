import React, { useEffect, useState } from 'react';
import useCustom from '../hooks';
import Event from './Event';
import { months } from '../util/calendar';

function AllEvents(props) {
  const { events, setEvents } = useCustom();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (events.length > 0) {
    
      const temp = events.filter(
        (event) =>
          event.day === parseInt(props.selectDate?.format('D')) &&
          event.month === months.indexOf(props.selectDate?.format('MMMM'))
      );
      setData(temp);
    }
  }, [events]);

  return (
    <>
      <div className="w-[100%] border-b">
        <p className="mt-5 text-black font-montserrat text-2xl font-medium leading-normal">
          Events
        </p>
        <h1 className=" text-gray-400 font-montserrat text-base font-normal leading-normal mb-2">
          {props.selectDate?.format('D MMM').toUpperCase()}
        </h1>
      </div>

      <div
        className={`w-[100%] h-[80%] flex items-center flex-col ${
          data.length == 0 && 'justify-center'
        }`}
      >
        {data.length > 0 ? (
          data.map((event) => {
            return <Event {...event} />;
          })
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M75 33.3333H79.1667C83.5869 33.3333 87.8262 35.0893 90.9518 38.2149C94.0774 41.3405 95.8333 45.5797 95.8333 50C95.8333 54.4203 94.0774 58.6595 90.9518 61.7851C87.8262 64.9107 83.5869 66.6667 79.1667 66.6667H75"
                stroke="#44A32C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33325 33.3333H74.9999V70.8333C74.9999 75.2536 73.244 79.4928 70.1184 82.6184C66.9928 85.744 62.7535 87.5 58.3333 87.5H24.9999C20.5796 87.5 16.3404 85.744 13.2148 82.6184C10.0892 79.4928 8.33325 75.2536 8.33325 70.8333V33.3333Z"
                stroke="#44A32C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 4.16666V16.6667"
                stroke="#44A32C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M41.6667 4.16666V16.6667"
                stroke="#44A32C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M58.3333 4.16666V16.6667"
                stroke="#44A32C"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-black content-center align-content-center   font-montserrat text-24 font-large leading-normal">
              No Events
            </p>
          </>
        )}
      </div>
      <button
        className=" w-[300px] h-[50px] first-letter rounded-md border border-solid border-green-600 bg-green-600  flex-shrink-0 text-[#FFF]"
        onClick={() => props.addEvent(true)}
      >
        Add Event
      </button>
    </>
  );
}

export default AllEvents;
