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
    ShareTravelInfoFrom,
    ShareTravelInfoFromBody,
    DivForFlexibleTimings,
    Div,
    FlexibleTimingsLabel,
    Requried,
    Title,
    From,
    To,
    DateAndTime,
    TravelMedium,
    AssetsQuantity
}
from './stylings';

@observer
class ShareTravelInfo extends React.Component {

    render() {
        return (<MainDiv>
                <ShareTravelInfoFrom>
                        <Title>{StringsData.shareTravelInfo}</Title>
        
                        <ShareTravelInfoFromBody>
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
                            
                            <TravelMedium>{StringsData.travelMedium}<Requried>*</Requried></TravelMedium>
                            <InputField type="text"/>
                            
                            <Div>
                            <AssetsQuantity>{StringsData.assetsQuantity}<Requried>*</Requried></AssetsQuantity>
                            <CounterPage/>
                            </Div>
                    
                            <Button buttonName={StringsData.shareForButton}/>
                        </ShareTravelInfoFromBody>
            </ShareTravelInfoFrom>
        </MainDiv>);
    }

}

export { ShareTravelInfo };
