import PropTypes from 'prop-types';
import { BiPlusMedical } from 'react-icons/bi';
import LoadMoreButton from './Button.style';

const Button = ({ onNextFetch }) => {
  return (
    <LoadMoreButton type="button" onClick={onNextFetch}>
      Load more <BiPlusMedical />
    </LoadMoreButton>
  );
};

Button.prototype = {
  onNextFetch: PropTypes.func.isRequired,
};

export default Button;
