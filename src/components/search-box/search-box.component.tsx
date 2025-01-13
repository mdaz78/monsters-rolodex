import { ChangeEvent } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps {
  placeholder: string;
  className: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  placeholder,
  className,
  onChangeHandler,
}: ISearchBoxProps) => {
  return (
    <input
      type='search'
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
