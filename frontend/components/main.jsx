import React from 'react';
import { connect } from 'react-redux';
import { fetchAppointments, fetchPhysicians } from '../actions/mainActions';
import AppointmentsIndex from './appointmentsIndex';
import PhysicianIndex from './physicianIndex';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhysicians();
  }

  updateSelected(id) {
    this.setState({selected: id})
  }
  
  render() {
    const physicians = this.props.physicians.map(doc => {
      return <li key={doc.id}>
        {`${doc.lname}, ${doc.fname}`}
      </li>
    })
    let phys = this.props.physicians.filter(phys => phys.id == this.state.selected)[0];
    console.log(phys);
    let name;
    let email;
    if (phys) {
      name = `Dr. ${phys.fname} ${phys.lname}`;
      email = `${phys.email} `;
    } else {
      name = "Select a physician";
      email = " ";
    }
    return (
      <div className="main-container">
        <div className="left-nav">
          <img className="logo" src={window.logo} alt=""/>
          <PhysicianIndex 
            fetchAppointments={this.props.fetchAppointments}
            physicians={this.props.physicians}
            updateSelected={this.updateSelected}
          />          
        </div>
        <div className="right">
          <h2>{name}</h2>
          <h4>{email}</h4>
          <AppointmentsIndex
            physician={this.state.selected === null ? null : this.props.physicians[this.state.selected]}
            appointments={this.props.appointments}
          />
        </div>
      </div>
    )
  }


}

const msp = state => ({
  physicians: Object.values(state.entities.physicians),
  appointments: Object.values(state.entities.appointments)
})

const mdp = (dispatch) => ({
  fetchPhysicians: () => dispatch(fetchPhysicians()),
  fetchAppointments: (physId) => dispatch(fetchAppointments(physId))
})

export default connect(msp, mdp)(Main);