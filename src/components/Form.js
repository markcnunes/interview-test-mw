import React from "react";

const Form = () => {
  const [error, setError] = React.useState(null);
  const [salary, setSalary] = React.useState(0);
  const [submitMessage, setSubmitMessage] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Name
    const name = e.target.elements.name.value.trim().toLowerCase();

    if (!name.match(/^[a-zA-Z ]+$/i)) {
      return setError(`The name field can only contain letters.`);
    }

    // Email
    const email = e.target.elements.email.value.trim().toLowerCase();

    if (
      !email.match(
        /^("(?:[!#-[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z^-\u{10FFFF}])*|\[[!-Z^-\u{10FFFF}]*\])$/u
      )
    ) {
      return setError(`Oops this email isn't valid. Please, try another one.`);
    }

    // Date
    const date = e.target.elements.date.value
      .trim()
      .toLowerCase()
      .split("-")
      .reverse()
      .join("-");
    if (
      !date.match(
        // eslint-disable-next-line
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      )
    ) {
      return setError(`Invalid Date of Birth.`);
    }

    // Colour
    const colour = e.target.elements.colour.value.trim().toLowerCase();

    if (!colour.match(/^[a-zA-Z ]+$/i)) {
      return setError(`The colour field can only contain letters.`);
    }

    setSubmitMessage("Sumiting...");
    setTimeout(() => {
      setSubmitMessage("Sbumited");
    }, 1500);
  };

  const handleChange = (e) => {
    setSalary(e.target.value);
  };

  return (
    <div className="form__section">
      <div className="container">
        {submitMessage === "Sbumited" ? (
          <h2>Thank you for sharing it with us!</h2>
        ) : (
          <>
            <h2>Tell's more about you</h2>
            <form onSubmit={handleSubmit} className="form">
              {error && <p className="form__error">{error}</p>}
              <fieldset>
                <label className="form__label" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  className="form__input"
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  aria-label="First name"
                  required
                />
              </fieldset>
              <fieldset>
                <label className="form__label" htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  className="form__input"
                  type="text"
                  name="email"
                  placeholder="Your email..."
                  aria-label="Email"
                  required
                />
              </fieldset>
              <fieldset>
                <label className="form__label" htmlFor="date">
                  Date of birth:
                </label>
                <input
                  id="date"
                  className="form__input"
                  type="date"
                  name="date"
                  aria-label="Date of birth"
                  required
                />
              </fieldset>
              <fieldset>
                <label className="form__label" htmlFor="colour">
                  Favourite colour:
                </label>
                <input
                  id="colour"
                  className="form__input"
                  type="text"
                  name="colour"
                  placeholder="Your favourite colour..."
                  aria-label="Favourite colour"
                  required
                />
                <label className="form__label" htmlFor="salary">
                  Salary per year: £ {salary && <>{salary}k</>}:
                </label>
              </fieldset>
              <fieldset>
                <input
                  id="salary"
                  className="form__input"
                  type="range"
                  name="salary"
                  min="0"
                  max="100"
                  value={salary}
                  onChange={handleChange}
                  aria-label="Salary"
                  step="1"
                />
                <div className="form__salary__numbers">
                  <span>£0k</span>
                  <span>£100k</span>
                </div>
              </fieldset>
              <button type="submit" className="button button--tertiary">
                Submit
              </button>
            </form>
            {submitMessage === "Sumiting..." && (
              <div className="form__submit__message">...Submiting</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
