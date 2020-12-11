import React, {Component,Fragment} from 'react';
import MUIDataTable from "mui-datatables";
import {Card} from 'reactstrap';

const ExDatatable = ({ title, data, columns, options }) => {
	return (
		<div className="transaction-history-detail">
			<Card heading="PatientDetails" reloadable fullBlock>
				<MUIDataTable
					title=""
					data={data}
					columns={columns}
					options={options}
				/>				
			</Card>
		</div>
	);
}

class PatientDetails extends Component {
	render() {

		const data = [
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },{
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            },
            {
                index : "1",
                Name : "Tejas",
                Address : "test",
                contact : "Pakwanchar rasta",
                email : "Tejasgoswami@test.com",
                age : "25",
                gender : "Male"
            }

        ];

		// define options for data tables
		const options = {
			filterType: 'dropdown',
			responsive: 'stacked',
			selectableRows: false,
		};
		// define columns for data tables
		const columns = ["Index", "Name", "Address", "contact", "email", "age", "gender"];

		return (
			<Fragment>
                <ExDatatable
                    title="Patients List"
                    data={data.map(item => {
                        return [
                            item.index,
                            item.Name,
                            item.Address,
                            item.contact,
                            item.email,
                            item.age,
                            item.gender
                        ]
                    })}
                    columns={columns}
                    options={options}
                />
			</Fragment>
		);
	}
}
export default PatientDetails;
