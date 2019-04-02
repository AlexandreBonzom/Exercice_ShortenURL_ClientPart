import React from "react";

const ArrayUrl = props => {
  return (
    <div className="array-container">
      <div className="row1">
        <span>Original URL</span>
        <span>Short URL</span>
        <span className="counter-column">Visits</span>{" "}
      </div>
      <ul>
        {props.arrayShortenUrl.length > 0 &&
          props.arrayShortenUrl.map(shortenUrl => {
            return (
              <li key={shortenUrl._id}>
                <span>
                  <a
                    href={shortenUrl.normalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shortenUrl.normalUrl}
                  </a>
                </span>
                <span
                  onClick={() =>
                    props.handleClickShorthenUrl(shortenUrl.shortenUrl)
                  }
                >
                  <a
                    href={shortenUrl.normalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shortenUrl.shortenUrl}
                  </a>
                </span>
                <span className="counter-column">{shortenUrl.counter}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ArrayUrl;
