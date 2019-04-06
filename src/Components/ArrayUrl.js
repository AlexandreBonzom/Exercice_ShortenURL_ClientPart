import React from "react";
import { Link } from "react-router-dom";

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
            const randomCharacters = shortenUrl.shortenUrl.substring(
              shortenUrl.shortenUrl.length - 5,
              shortenUrl.shortenUrl.length
            );

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
                <span onClick={() => setTimeout(props.updateArrayUrl, 1000)}>
                  <Link to={randomCharacters} target="_blank">
                    {shortenUrl.shortenUrl}
                  </Link>
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
