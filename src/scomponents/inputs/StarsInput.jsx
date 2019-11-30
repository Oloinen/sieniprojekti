import React from "react";
import { Field } from "formik";

import Stars from "./Stars";
const fieldName = "stars";

const StarsInput = () => (
  <Field name={fieldName} id={fieldName} type="number">
    {({ field: { value }, form: { setFieldValue } }) => (
      <fieldset className="fieldsetStar">
        <div>
        <label htmlFor="fieldName" className="starLabel">
          Level of cool:
        </label>
        </div>
        <div>
          <Stars
            count={value}
            handleClick={number => setFieldValue(fieldName, number)}
            className="starField"
          />
          </div>
      </fieldset>
    )}
  </Field>
);

export default StarsInput;
