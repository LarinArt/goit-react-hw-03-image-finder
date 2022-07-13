import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiPlusMedical } from 'react-icons/bi';
import LoadMoreButton from './Button.style';

export class Button extends Component {
  static propTypes = { onClick: PropTypes.func.isRequired };

  render() {
    return (
      <LoadMoreButton type="button" onClick={this.props.onClick}>
        Load more <BiPlusMedical />
      </LoadMoreButton>
    );
  }
}

export default Button;
