import { createContext, useContext, useState } from 'react';

const myContext = createContext();
export default function useCustom() {
  return useContext(myContext);
}

export function AppContext(props) {
  const [events, setEvents] = useState([]);

  const value = {
    events,
    setEvents,
  };

  return <myContext.Provider value={value} {...props} />;
}
