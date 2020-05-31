import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Header, Image, HeaderLeftPart } from './stylings';

import SelectCommute from '../../../components/common/SelectCommute/index.js';
import RideRequest from '../RideRequest/index';

@observer
class HomeScreen extends React.Component {
    @observable renderPage
    @observable component
    @observable isRequest
    @observable requsetOptions
    @observable shareOptions
    constructor(props) {
        super(props);
        this.request = 'Ride';
        this.share = 'Ride';
        this.requestComponent = 'RideRequest';
        this.shareComponent = 'ShareRide';
        this.isRequest = true;
        this.requestOptions = ['Ride', 'AssetTransport'];
        this.shareOptions = ['Ride', 'TravelInfo'];
    }

    onChangeRequest = (event) => {
        this.request = event.target.value;
        this.isRequest = true;
        if (this.request === 'Ride') {
            this.requestComponent = 'RideRequest';
        }
        else if (this.request === 'AssetTransport') {
            this.requestComponent = 'AssetTransportRequest';
        }
    }

    onChangeShare = (event) => {
        this.share = event.target.value;
        this.isRequest = false;
        if (this.share === 'Ride') {
            this.shareComponent = 'ShareRide';
        }
        else if (this.share === 'TravelInfo') {
            this.shareComponent = 'ShareTravelInfo';
        }
    }

    render() {
        return (<div>
        <Header>
        <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/4c19d175-fb00-4139-b427-5f8613891b3d.svg" alt="logo"/>
        <HeaderLeftPart>
        <p>request</p>
        <p>share</p>
        </HeaderLeftPart>
        </Header>
        <RideRequest/>
        </div>);
    }

}

export default HomeScreen;



/*
   <SelectCommute onChangeRequest={this.onChangeRequest} options={this.props.requestOptions}/>
        <SelectCommute onChangeShare={this.onChangeShare} options={this.props.shareOptions}/>
     
*/
