import React from 'react';

import StringsData from '../../i18n/string.json';

import { Div, Table, TableHead, TableRow, TableData, TableBody } from './stylings';

class UserRequests extends React.Component {

        constructor(props) {
                super(props);
                this.userRequests = [
                        { id: 1, from: 'Kurnool', to: 'Hyderabad', dateAndTime: '01/06/20, 10:20 PM', noOfPeople: '2', luggageQuantity: '3', acceptedPersonDetails: { name: 'Antonio.D', mobile: 1234567890 }, status: 'confirm' },
                        { id: 2, from: 'Dhone', to: 'Hyderabad', dateAndTime: '01/06/20, 10:20 PM', noOfPeople: '2', luggageQuantity: '3', acceptedPersonDetails: { name: 'Antonio.D', mobile: 1234567890 }, status: 'confirm' }
                ];
        }

        render() {
                return (<Div>
                <Table>
                        <TableHead>
                                <TableRow>
                                        <TableData>{StringsData.from}</TableData>
                                        <TableData>{StringsData.to}</TableData>
                                        <TableData>{StringsData.dateAndTime}</TableData>
                                        <TableData>{StringsData.noOfPeople}</TableData>
                                        <TableData>{StringsData.laguageQuantity}</TableData>
                                        <TableData>{StringsData.acceptedPersonDetails}</TableData>
                                        <TableData>{StringsData.status}</TableData>
                                </TableRow>
                        </TableHead>
                        <TableBody>
                               { this.userRequests.map((list)=>{
                             return(
                               <TableRow key={Math.random()}>
                                        <TableData>{list.from}</TableData>
                                        <TableData>{list.to}</TableData>
                                        <TableData>{list.dateAndTime}</TableData>
                                        <TableData>{list.noOfPeople}</TableData>
                                        <TableData>{list.luggageQuantity}</TableData>
                                        <TableData>{list.acceptedPersonDetails.name}<br/>
                                        {list.acceptedPersonDetails.mobile}</TableData>
                                        <TableData>{list.status}</TableData>
                                </TableRow>);
                                })}
                        </TableBody>
                </Table>
                </Div>);
        }
}

export { UserRequests };
