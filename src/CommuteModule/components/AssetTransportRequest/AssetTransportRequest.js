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
    AssetTransportRequestForm,
    AssetTransportRequestFormBody,
    DivForFlexibleTimings,
    Div,
    FlexibleTimingsLabel,
    Requried,
    Title,
    From,
    To,
    DateAndTime,
    NoOfSeats,
    AssetType,
    AssetSensitivity,
    WhomToDeliver
}
from './stylings';

@observer
class AssetTransportRequest extends React.Component {
    render() {
        return (<MainDiv>
                <AssetTransportRequestForm>
                    <Title>{StringsData.assetTransportRequest}</Title>
            
                         <AssetTransportRequestFormBody>
                            <From>{StringsData.from}<Requried>*</Requried></From>
                            <InputField type="text" placeholder="Ex.k." />
                            
                            <To>{StringsData.to}<Requried>*</Requried></To>
                            <InputField type="text"/>
                            
                            <DateAndTime>{StringsData.dateAndTime}<Requried>*</Requried></DateAndTime>
                            <InputField type="text" width="20px"/>
                            
                            <DivForFlexibleTimings>
                            <CheckBox />
                            <FlexibleTimingsLabel>{StringsData.flexibleTimings}</FlexibleTimingsLabel>
                            </DivForFlexibleTimings>
                            
                            <Div>
                            <NoOfSeats>{StringsData.noOfSeats}<Requried>*</Requried></NoOfSeats>
                            <CounterPage/>
                            </Div>
                            
                            <AssetType>{StringsData.assetType}<Requried>*</Requried></AssetType>
                            <InputField type="text" placeholder="Asset type" />
                            
                            <AssetSensitivity>{StringsData.assetSensitivity}<Requried>*</Requried></AssetSensitivity>
                            <InputField type="text" placeholder="Select Sentivity" />
                            
                            <WhomToDeliver>{StringsData.assetSensitivity}<Requried>*</Requried></WhomToDeliver>
                            <InputField type="text" placeholder="Name/mobile number" />
                            
                            <Button buttonName={StringsData.requestForButton}/>
        
                        </AssetTransportRequestFormBody>
            
                </AssetTransportRequestForm>
    </MainDiv>);
    }
}

export { AssetTransportRequest };
