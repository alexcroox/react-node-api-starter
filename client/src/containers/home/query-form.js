import React from 'react'
import { Form } from 'formik'
import TextInput from '../../components/text-input'
import Button from '../../components/button'

const QueryForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Form>
    <TextInput
      type="text"
      name="query"
      placeholder="E.g portsmouth"
    />
    {errors.query && touched.query && <div>{errors.query}</div>}
    <Button primary onClick={handleSubmit} loading={isSubmitting}>
      {isSubmitting ? `Searching...` : 'Find weather'}
    </Button>
  </Form>
)

export default QueryForm
