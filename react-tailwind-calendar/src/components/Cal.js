import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { generateDate, months } from '../util/calendar';
import cn from '../util/cn';
import dayjs from 'dayjs';
import useCustom from '../hooks';
import Event from './Event';

function Cal(props) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentDate = dayjs();
  const { events } = useCustom();

  return (
    <div className="w-[80%] h-[95%] rounded-lg bg-white shadow-md">
      <div
        className="flex justify-between items-center px-5"
        style={{ borderBottom: '1px solid #ced4d7' }}
      >
        <h1 className="select-none font-normal text-3xl px-10 py-5">
          {months[props.today.month()]}, {props.today.year()}
        </h1>
        <div className="flex gap-3 items-center px-5">
          <GrFormPrevious
            className="w-10 h-10 cursor-pointer hover:scale-105 transition-all bg-gray-300  rounded-full text-black"
            onClick={() => {
              props.setToday(props.today.month(props.today.month() - 1));
            }}
          />
          <h1
            className=" cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              props.setToday(currentDate);
            }}
          ></h1>
          <GrFormNext
            className="w-10 h-10 cursor-pointer hover:scale-105 transition-all bg-gray-300  rounded-full text-black"
            onClick={() => {
              props.setToday(props.today.month(props.today.month() + 1));
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <div
              className="p-10 text-center h-14 grid place-content-center text-sm border-t"
              style={{ borderRight: '1px solid rgb(222 244 255)' }}
            >
              <h1
                key={index}
                className="text-lg text-center h-14 w-14  grid place-content-center text-gray-500 select-none "
              >
                {day}
              </h1>
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-7 ">
        {generateDate(props.today.month(), props.today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="text-center h-36  text-sm border-t flex flex-col justify-start pt-3 items-center"
                style={{ borderRight: '1px solid rgb(222 244 255)' }}
              >
                <h1
                  className={cn(
                    currentMonth ? '' : 'text-gray-400',
                    today ? 'bg-green-600 text-white' : '',
                    props.selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? 'bg-black text-white'
                      : '',
                    'h-10 w-10 relative  rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-all cursor-pointer select-none font-bold mb-5'
                  )}
                  onClick={() => {
                    props.setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
                {events.length > 0 &&
                  events.map((event) => {
                    console.log();
                    const eve =
                      event.day === date.date() &&
                      event.month ===
                      props.today.month()
                        ? event
                        : undefined;

                    return eve !== undefined && <Event {...event} />;
                  })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Cal;
