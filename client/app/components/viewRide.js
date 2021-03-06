const React = require('react');
const RideTable = require('./rideTable');
import {getPreviousRideData} from '../server';
import {getConfirmedRideData} from '../server';
import {getPendingRideData} from '../server';

class ViewRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            pendingRideArray:[],
            confirmedRideArray:[],
            previousRideArray:[]
    }
  }
  componentWillMount() {
    getPreviousRideData("000000000000000000000001",(data)=> {
      // console.log(data);
      this.setState({previousRideArray:data});
    });
    getPendingRideData("000000000000000000000001",(data)=> {
          // console.log(data);
          this.setState({pendingRideArray:data});
    });
    getConfirmedRideData("000000000000000000000001",(data)=> {
          // console.log(data);
          this.setState({confirmedRideArray:data});
    });
  }

  render() {
    let rideDataPrev = this.state.previousRideArray;
    let rideDataPend = this.state.pendingRideArray;
    let rideDataCon = this.state.confirmedRideArray;
    return (
      <div>
      <RideTable title="Previous Ride" rideData={rideDataPrev}/>
      <RideTable title="Pending Ride" rideData={rideDataPend}/>
      <RideTable title="Confirmed Ride" rideData={rideDataCon}/>
      </div>
  );
  }
}
module.exports = ViewRide;
