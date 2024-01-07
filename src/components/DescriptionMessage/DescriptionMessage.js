import PropTypes from 'prop-types';
import css from './DescriptionMessage.module.css';

export const DescriptionMessage = ({ message }) => {
  return <p className={css.descriptionMessage}>{message}</p>;
};

DescriptionMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
