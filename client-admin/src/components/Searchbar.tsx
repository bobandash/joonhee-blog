import {FC} from 'react';
import styles from './Searchbar.module.css'
import {useState} from 'react';

interface SearchbarProps {
  handleTitleQuery: (query : string) => void;
}

const Searchbar:FC<SearchbarProps> = ({handleTitleQuery}) => {
  const [searchQueryValue, setSearchQueryValue] = useState('');
  function handleInputChange(e : React.ChangeEvent<HTMLInputElement>) {
    setSearchQueryValue(e.target.value);
  } 

  function handleSubmit(e : React.FormEvent){
    e.preventDefault();
    handleTitleQuery(searchQueryValue);
  }

  return (
    <div>
      <form onSubmit = {handleSubmit} className = {styles.form}>
        <input type = "text" placeholder = "Search Post By Title" value = {searchQueryValue} onChange = {handleInputChange}/>
        <button type = "submit" onClick = {handleSubmit}><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default Searchbar
