import React, { useRef } from 'react';
import { createEvent } from '../service';
import { useMutation } from 'react-query';

function AddEvent(props) {
  const mutation = useMutation(createEvent);
  const inputRef = useRef(null);
  console.log('props', props);
  const handleSave = async () => {
    if (inputRef.current) {
      const data = {
        title: inputRef.current.value,
        date: props.selectDate.format('D MMM').toUpperCase(),
      };
      await mutation.mutateAsync(data);
      props.addEvent(false);
    }
  };
  return (
    <>
      <div className="w-[100%] border-b">
        <p className="mt-5 text-black font-montserrat text-2xl font-medium leading-normal">
          Events
        </p>
        <h1 className=" text-gray-400 font-montserrat text-base font-normal leading-normal mb-2">
          {props.selectDate.format('D MMM').toUpperCase()}
        </h1>
      </div>

      <div className="w-[100%] relative -top-8">
        <h1 className="text-[#8C8C8C] font-montserrat text-base font-semibold leading-normal pt-5">
          Event Title
        </h1>

        <input
          ref={inputRef}
          class="mt-2 w-336 h-57 flex-shrink-0 rounded-2 border border-solid border-green-500 shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Even Title"
        />
      </div>
      {/* Event container  */}
      <div className="w-[100%] h-[70%]  relative -top-10 overflow-hidden"></div>
      <button
        className=" w-[300px] h-[50px] first-letter rounded-md border border-solid border-green-600 bg-green-600  flex-shrink-0 text-[#FFF]"
        onClick={handleSave}
      >
        Save
      </button>
    </>
  );
}

export default AddEvent;
