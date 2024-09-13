import React, { useState } from 'react';

const FormValidation = () => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};

    if (inputValues.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters long";
    }

    if (inputValues.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters long";
    }

    if (!inputValues.city) {
      errors.city = "City is required";
    }

    if (!inputValues.state) {
      errors.state = "State is required";
    }

    if (!inputValues.zip || !/^\d{5}$/.test(inputValues.zip)) {
      errors.zip = "Zip code must be a valid 5-digit number";
    }

    if (!inputValues.agree) {
      errors.agree = "You must agree to the terms and conditions";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputFields({ ...inputFields, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (event) => {
    console.log('fdsf');
    event.preventDefault();
    const validationErrors = validateValues(inputFields);
    setErrors(validationErrors);
    setSubmitting(true);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid. Submitting data:", inputFields);
    } else {
      console.log("Form has errors:", validationErrors);
    }
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bootstrap Validation - Normal</h4>
                <p className="card-title-desc">
                  Provide valuable, actionable feedback to your users with HTML5
                  form validation–available in all our supported browsers.
                </p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} action={''} method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="validationCustom01">
                          First name
                        </label>
                        <input
                          type="text"
                          id="validationCustom01"
                          name="firstName"
                          placeholder="First name"
                          className={`form-control ${errors.firstName ? "is-invalid" : "is-valid"}`}
                          value={inputFields.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                        {!errors.firstName && <div className="valid-feedback">Looks good!</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="validationCustom02">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="validationCustom02"
                          name="lastName"
                          placeholder="Last name"
                          className={`form-control ${errors.lastName ? "is-invalid" : "is-valid"}`}
                          value={inputFields.lastName}
                          onChange={handleChange}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                        {!errors.lastName && <div className="valid-feedback"></div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="validationCustom03">
                          City
                        </label>
                        <input
                          type="text"
                          id="validationCustom03"
                          name="city"
                          placeholder="City"
                          className={`form-control ${errors.city ? "is-invalid" : "is-valid"}`}
                          value={inputFields.city}
                          onChange={handleChange}
                        />
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                        {!errors.city && <div className="valid-feedback"></div>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="validationCustom04">
                          State
                        </label>
                        <input
                          type="text"
                          id="validationCustom04"
                          name="state"
                          placeholder="State"
                          className={`form-control ${errors.state ? "is-invalid" : "is-valid"}`}
                          value={inputFields.state}
                          onChange={handleChange}
                        />
                        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                        {errors.state && <div className="valid-feedback"></div>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="validationCustom05">
                          Zip
                        </label>
                        <input
                          type="text"
                          id="validationCustom05"
                          name="zip"
                          placeholder="Zip"
                          className={`form-control ${errors.zip ? "is-invalid" : ""}`}
                          value={inputFields.zip}
                          onChange={handleChange}
                        />
                        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id="invalidCheck"
                            name="agree"
                            className={`form-check-input ${errors.agree ? "is-invalid" : ""}`}
                            checked={inputFields.agree}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                          </label>
                          {errors.agree && <div className="invalid-feedback">{errors.agree}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bootstrap Validation (Tooltips)</h4>
                <p className="card-title-desc">
                  If your form layout allows it, you can swap the <code>.&#123; valid|invalid &#125;-feedback</code> classes for <code>.&#123;valid|invalid &#125;-tooltip</code> classes to display
                  validation feedback in a styled tooltip.
                </p>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} action={''} method="post">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3 position-relative">
                        <label className="form-label" htmlFor="validationTooltip01">
                          First name
                        </label>
                        <input
                          type="text"
                          id="validationTooltip01"
                          placeholder="First name"
                          required
                          className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                          value={inputFields.firstName}
                          onChange={handleChange}
                        />
                        <div className="valid-tooltip">Looks good!</div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormValidation;
