import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { fetchWeather } from '../../modules/weather'
import QueryForm from './query-form'
import Section from '../../components/section'
import Header from '../../components/header'
import Title from '../../components/title'

const queryFormInitialValues = {
  query: ''
}

const queryFormRules = Yup.object().shape({
  query: Yup.string().required('Please enter a location to begin'),
})

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.onQueryFormSubmit = this.onQueryFormSubmit.bind(this)

    // Do we already have a locationId? Lets fetch the latest weather
    if (this.props.locationId)
      this.props.fetchWeather(this.props.locationId)
  }

  onQueryFormSubmit = async (values, { setSubmitting, setErrors }) => {
    this.props.fetchWeather(values.query)
      .then(() => setSubmitting(false))
      .catch(error => {
        setSubmitting(false)
        setErrors({
          query: error
        })
      })
  }

  render () {
    return (
      <Fragment>
        <Header />

        <Section>
          {this.props.locationTemp ? (
            <Title>
              The temperature in {this.props.location} is {this.props.locationTemp}
            </Title>
          ) : (
            <Fragment>
              <Title>Lookup temperature in your area</Title>

              <Formik
                component={QueryForm}
                initialValues={queryFormInitialValues}
                onSubmit={this.onQueryFormSubmit}
                validationSchema={queryFormRules}
              />
            </Fragment>
          )}
        </Section>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  fetchWeather
}

const mapStateToProps = state => ({
  location: state.weather.location,
  locationTemp: state.weather.locationTemp
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
