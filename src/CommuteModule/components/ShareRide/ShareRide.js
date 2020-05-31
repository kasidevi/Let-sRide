import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import InputField from '../../../components/common/InputField/index';
import Button from '../../../components/common/Buttons/index';
import CounterPage from '../../../components/common/CounterPage/index';
import CheckBox from '../../../components/common/CheckBox/index';

import StringsData from '../../i18n/string.json';

import {
    MainDiv,
    From,
    To,
    DateAndTime,
    ShareRideFrom,
    Title,
    DivForFlexibleTimings,
    Div,
    FlexibleTimings,
    NoOfSeats,
    LauageQuantity,
    ShareRideFromBody,
    Requried
}
from './stylings';

@observer
class ShareRide extends React.Component {

    render() {
        return (<MainDiv>
        <ShareRideFrom>
        <Title>{StringsData.ShareRide}</Title>
        
        <ShareRideFromBody>
        <From>{StringsData.from}<Requried>*</Requried></From>
        <InputField type="text" placeholder="Ex.k." />
        
        <To>{StringsData.to}<Requried>*</Requried></To>
        <InputField type="text"/>
        
        <DateAndTime>{StringsData.dateAndTime}<Requried>*</Requried></DateAndTime>
        <InputField type="text" width="20px"/>
        
        <DivForFlexibleTimings>
        <CheckBox />
        <FlexibleTimings>{StringsData.flexibleTimings}</FlexibleTimings>
        </DivForFlexibleTimings>
        
        <Div>
        <NoOfSeats>{StringsData.noOfSeats}<Requried>*</Requried></NoOfSeats>
        <CounterPage/>
        </Div>
        
        <Div>
        <LauageQuantity>{StringsData.laguageQuantity}<Requried>*</Requried></LauageQuantity>
        <CounterPage/>
        </Div>

        <Button buttonName={StringsData.requestForButton}/>
        </ShareRideFromBody>
        </ShareRideFrom>
        </MainDiv>);
    }

}

export { ShareRide };
