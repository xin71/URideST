const React = require('react');
import Footer from './footer';
import {getLocationData} from '../server';

class PickUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.state={
      pickupValue:'',
      pickupLocation: ["*"]
    }
    this.handlePickupLocation = this.handlePickupLocation.bind(this);
  }

  componentDidMount() {
    getLocationData((locationData)=> {
      this.setState({pickupLocation:locationData});
    })
  }

  handleSwitch(newpage) {
    const data = {
      currentPage:newpage.currentPage
    }
    if (newpage.currentPage == "dropOff"){
      this.props.save("pickup",this.state.pickupValue,data);
    } else {
      // go back to previous, disregard data
      this.props.switch(data);
    }
  }
  handlePickupLocation(e){
    e.preventDefault(e);
    this.setState({pickupValue: e.target.value});
  }
  render() {
    const locations = this.state.pickupLocation;
    return (
      <div>
        <div className="container">
          <div className="col-md-4">
          </div>
          <div className="col-md-4 centered">
              <div className="text-center">
                  <div className="container-fluid">
                      <div className="row">
                              <form method="post">
                                  <div className="form-group ">
                                    <div className="well">
                                      Select a Pickup Location
                                    </div>
                                    <select className="select form-control" value={this.state.pickupValue} id="select" name="select"
                                      onChange={this.handlePickupLocation}>
                                      <option value="*" >
                                          *
                                      </option>
                                      {locations.map((location) =>
                                        <option key={location._id} value={location.building} >
                                            {location.building}
                                        </option>
                                      )}
                                    </select>
                                  </div>
                                  <div className="form-group ">
                                      <input className="form-control input-lg" id="text" name="pickupLocation" placeholder="Enter custom address here" type="text" onChange={(e)=>this.handlePickupLocation(e)} />
                                  </div>
                              </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
        <Footer currentPage={this.props.currentPage} switch={this.handleSwitch}/>
      </div>
    );
  }
}
module.exports = PickUp;
