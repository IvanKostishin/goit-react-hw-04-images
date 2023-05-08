import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
