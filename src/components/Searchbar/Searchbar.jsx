import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import { Header, Form, SearchbarButton, Input } from './Searchbar.style.js';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  onChangeInput = e => {
    this.setState({ query: e.currentTarget.value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { query } = this.state;

    if (query.trim() === '') {
      toast.info('Please enter your request!');
      return;
    }

    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Form onSubmit={this.onSubmitForm}>
          <SearchbarButton type="submit">
            <FaSearch size={12} />
          </SearchbarButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.onChangeInput}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
