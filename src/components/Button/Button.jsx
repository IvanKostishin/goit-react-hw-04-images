import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.Button} onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
