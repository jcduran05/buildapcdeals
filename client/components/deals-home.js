import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../store'

/**
 * COMPONENT
 */
class DealsHome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.deals()
  }

  render() {
    // Initial html when data hasn't been received
    if (this.props.deals == undefined || this.props.deals.length == 0) {
      return (
        <div>
          <div className="col-md-12">loading ...</div>
        </div>
      )
    }

    const deals = this.props.deals
    const dealsArr = deals.map((deal, idx) => {
      return (
        <tr key={`${deal.id}_${deal.title}`}>
          <td>{idx + 1}</td>
          <td>{deal.title}</td>
          <td>{deal.doamin}</td>
        </tr>
      )
    })

    return (
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Domain</th>
              </tr>
            </thead>
            <tbody>
              {dealsArr}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    deals: state.deals
  }
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(DealsHome)

/**
 * PROP TYPES
 */
DealsHome.propTypes = {
  deals: PropTypes.array.isRequired
}
