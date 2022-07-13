import { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { Header, Form, SearchbarButton, Input } from './Searchbar.style.js';

export class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e =>
    this.setState({ query: e.currentTarget.value.toLowerCase() });

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSearch(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
          <SearchbarButton type="submit">
            <FaSearch size={12} />
          </SearchbarButton>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
