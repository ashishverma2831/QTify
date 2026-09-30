// import { ReactComponent as SearchIcon } from "../../assets/icons/Search-icon.svg";
import SearchIcon from "../../assets/icons/Search-icon.svg?react";
import styles from "./Search.module.css";

function Search({ placeholder }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input className={styles.search} required placeholder={placeholder} />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
