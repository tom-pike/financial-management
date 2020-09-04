import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../../components/hero/Hero';
import NetPayContainer from '../../components/net-pay/NetPayContainer';

import { Link } from 'react-router-dom';

function NetPayCalculator(props) {
	return (
		<>
			<Hero />

			<Container>
				<Row className="justify-content-center">
					<Col xs={12} sm={10} md={8}>
						<Link to="/">home</Link>
						<NetPayContainer employmentType={props.employmentType} />
					</Col>
				</Row>
			</Container>
		</>
	);
}

NetPayCalculator.propTypes = {
	employmentType: PropTypes.string
};

export default NetPayCalculator;
