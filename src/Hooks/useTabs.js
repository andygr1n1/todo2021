import {useState} from 'react';

export const useTabs = () => {
   const [tab, setTab] = useState(true);
   const [active] = useState("active");

   return {tab, setTab, active}
}
