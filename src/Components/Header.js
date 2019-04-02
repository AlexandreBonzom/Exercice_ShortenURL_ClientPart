import React from "react";

const Header = props => {
  return (
    <header>
      <div className="header-container">
        <h1>Simplify your links</h1>
        <form>
          <input
            type="text"
            placeholder="Your original URL here"
            value={props.value}
            onChange={props.handleChange}
            onBlur={props.handleOnBlur}
            className={props.isUrlValid ? "" : "not-valid-url"}
          />
          <button onClick={e => props.handleSubmit(e)}>shorten url</button>
        </form>
        {!props.isUrlValid && (
          <span className="error">
            This URL is not valid. Please verify (maybe missing http/https)
          </span>
        )}
        {props.isAlreadyShorten && (
          <span className="error">
            This URL is already shorten. Please try another one.
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
