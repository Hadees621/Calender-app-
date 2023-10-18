import dayjs from 'dayjs';
import React, { useState } from 'react';
import { AppContext } from './hooks';
import Sidebar from './components/Sidebar';
import Cal from './components/Cal';

export default function Calendar() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [isEvent, setIsEvent] = useState(false);
  const calendarProps = {
    days,
    today,
    setToday,
    selectDate,
    setSelectDate,
    isEvent,
    setIsEvent,
  };
  return (
    <AppContext>
      <div className="bg-slate-200 w-screen h-screen flex justify-center items-center p-12 ">
        <div className="flex gap-10 sm:divide-x justify-center w-screen h-[90%] rounded  items-center sm:flex-row flex-col">
          <Cal {...calendarProps} />
          <Sidebar
            isEvent={isEvent}
            selectDate={selectDate}
            setIsEvent={setIsEvent}
          />
        </div>
      </div>
    </AppContext>
  );
}
