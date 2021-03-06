import PropTypes from 'prop-types';
import Population from './Population';

const PopulationList = (props) => {
  const { population } = props;
  return (
    <ul className="population-list">
      {population.map((item) => {
        const { date, value } = item;
        return (
          <Population
            key={date}
            {...{
              date,
              value,
            }}
          />
        );
      })}
    </ul>
  );
};

PopulationList.propTypes = {
  population: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
      date: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PopulationList;
