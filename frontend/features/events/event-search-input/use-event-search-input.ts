import { Ievent } from "../types";
import { Dispatch, SetStateAction } from "react";

interface Iprops {
  events: Ievent[];
  setEvents: Dispatch<SetStateAction<Ievent[]>>;
}

interface IinitialValues {
  searchQuery: string;
}

const useEventSearchInput = (props: Iprops) => {
  const { events, setEvents } = props;

  const initialValues: IinitialValues = {
    searchQuery: "",
  };

  const searchEvents = ({ searchQuery }: IinitialValues) => {
    const filteredEvents: Ievent[] = events.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setEvents(filteredEvents);
  };

  return {
    searchEvents,
    initialValues,
  };
};
export default useEventSearchInput;
