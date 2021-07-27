import { Fragment } from "react";

const TeaList = ({ teas, handleDelete }) => {
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map((tea) => {
          return (
            <Fragment key={tea.id}>
              <li key={tea.name}>
                {tea.name} by {tea.brand}
              </li>
              <button onClick={() => handleDelete(tea.id)}>Delete</button>
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default TeaList;
