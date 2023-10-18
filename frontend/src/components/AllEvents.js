import React from 'react';
import Event from './Event';
import { getEvents } from '../service';
import { useQuery } from 'react-query';
import { EmptyIcon } from '../assets/icon';

function AllEvents(props) {
  const { data } = useQuery('eventData', getEvents);

  const filters = data?.filter(
    (event) => event?.date === props.selectDate?.format('D MMM').toUpperCase()
  );

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
          (filters?.length === 0 && 'justify-center') ||
          (!filters && 'justify-center')
        }`}
      >
        {filters?.length > 0 ? (
          filters?.map((event) => <Event {...event} />)
        ) : (
          <>
            <EmptyIcon />
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
