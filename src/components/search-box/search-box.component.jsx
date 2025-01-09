import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { placeholder, className, onChangeHandler } = this.props;

    return (
      <input
        type='search'
        placeholder={placeholder}
        className={className}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
