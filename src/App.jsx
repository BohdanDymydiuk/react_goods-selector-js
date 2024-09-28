import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const nothingSelected = 'No goods selected';
  const [food, selectFood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {food === false ? (
          nothingSelected
        ) : (
          <>
            {`${food} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => selectFood(false)}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const plus = '+';
            const minus = '-';

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': food === good,
                })}
              >
                <td>
                  <button
                    data-cy={food === good ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${food === good && 'is-info'}`}
                    onClick={() =>
                      food !== good ? selectFood(good) : selectFood(false)
                    }
                  >
                    {food === good ? minus : plus}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
