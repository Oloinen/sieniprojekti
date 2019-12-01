import React, {useState} from 'react';
import * as Yup from 'yup';
import '../styles/Form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import StarsInput from './inputs/StarsInput'

const ScreenForm = ({updateMushroom, shroom}) => {

    const id = parseInt(shroom.id);
    console.log(id)

    const [stars, setStars] = useState(0);

    const MushroomSchema = Yup.object().shape({
        finnishname: Yup.string()
        .min(4, "Vähintään neljä kirjainta")
        .max(50, "Enintään 50 kirjainta")
        .required("Sienen nimi vaaditaan"),
        latinname: Yup.string()
        .min(5, "Vähintään viisi kirjainta")
        .max(50, "Enintään 50 kirjainta")
    })

    function Checkbox({ field, type }) {
        return (
          <label>
            {/* remove {...field} to see changes not propagated */}
            <input {...field} type={type} />
            {field.checked}
          </label>
        );
      }

    return (
            <Formik
              initialValues={{ finnishname: shroom.finnishname, latinname: "", grouping: "", edible: false, stars, foundtime: "2000-12-12", location: "", environment: "", description: ""}}
              validationSchema={MushroomSchema}
              onSubmit={(values, {setSubmitting, resetForm}) => {
                  setStars();
                  setSubmitting(true);
                  setTimeout(() => {
                    console.log(values)
                    updateMushroom(id, values);
                  resetForm();
                  setSubmitting(false);
              }, 500)
            }}
            >
              {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="form">
                    <StarsInput/>
                    <fieldset>
                    <Field
                      type="text"
                      name="finnishname"
                      placeholder="Enter finnishname"
                      className={touched.finnishname && errors.finnishname ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.finnishname || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="finnishname"
                      className="invalid-feedback"
                    /></fieldset>
                    <fieldset>
                    <Field
                      type="text"
                      name="latinname"
                      placeholder="Enter latinname"
                      className={touched.latinname && errors.latinname ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.latinname || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="latinname"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field
                      type="text"
                      name="grouping"
                      placeholder="Sieniryhmä"
                      className={touched.grouping && errors.grouping ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.grouping || ''}
                    />
                     <ErrorMessage
                      component="div"
                      name="grouping"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field
                      as="select"
                      name="location"
                      className={touched.location && errors.location ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      style={{display: 'block'}}
                    >
                    <option value="" label="Löytöpaikka"/>
                    <option value="Nuuksio" label="Nuuksio"/>
                    <option value="Sipoo" label="Sipoo"/>
                    <option value="Herttoniemi" label="Valitse paikka"/>
                    <option value="Mustavuori" label="Mustavuori"/>
                    <option value="Jakomäki" label="Jakomäki"/>
                    <option value="Oulu" label="Oulu"/>
                    </Field>
                    <ErrorMessage
                      component="div"
                      name="location"
                      className="invalid-feedback"
                    />
                    <Field
                      type="date"
                      name="foundtime"
                      className={touched.foundtime && errors.foundtime ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.foundtime || "2000-12-12"}
                    />
                    <ErrorMessage
                      component="div"
                      name="foundtime"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field
                      type="text"
                      name="environment"
                      placeholder="Löytöpaikan kuvaus"
                      className={touched.environment && errors.environment ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.environment || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="environment"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field as="textarea"
                      name="description"
                      rows="4"
                      placeholder="Sienen kuvaus"
                      className={touched.description && errors.description ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="description"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                <label className="forCheckbox">Onko sieni syötävä?</label>
                    <Field
                      type="checkbox"
                      name="edible"
                      className="forCheckbox"
                      component={Checkbox}
                      checked={values.edible}
                    />
                    </fieldset>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    >Submit
                  </button>
                </Form>
              )}
            </Formik>
    );
  }

export default ScreenForm;