import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filter/slice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const onInput = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <h2 className={css.header}>Find Contacts by Name</h2>
      <input className={css["search-box"]} onInput={onInput}></input>
    </>
  );
};
