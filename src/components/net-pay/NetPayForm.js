import React from 'react';
import { func, shape } from 'prop-types';
import { netPayType } from './PropTypes';
// import Form from 'react-bootstrap/Form';
import { Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

function NetPayForm(props) {
	const {
		employmentType,
		taxData,
		baseIncome,
		creditPoints,
		pensionOption,
		pensionPercent,
		educationFund,
		travelAllowance,
		lunchAllowance,
		annualBonus,
		commission,
		overtime,
		validated
	} = props.stateData;
	const handleChange = props.handleChange;
	const invalidNum = 'Enter a valid number.';

	return (
		<section>
			<h2>Net pay calculator</h2>
			<Form
				id={`netpay-form-${employmentType}`}
				noValidate
				validated={validated}
				onSubmit={props.handleSubmit}
				// autocomplete="off"
			>
				{/*
				//
				//
				//
				//
				*/}
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						1
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" pattern="[0-9]*" step="any"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						2
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" pattern="[0-9]*" step="0.1"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						3
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" step="0.1"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						4
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" inputmode="numeric" step="0.1"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						5
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" inputmode="numeric" pattern="[0-9]*" step="0.1"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						6
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" inputmode="numeric" pattern="[0-9]*"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						7
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="input"
							type="number"
							inputmode="numeric"
							pattern="[0-9]*"
							step="0.1"
						></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						8
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" inputmode="numeric"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						9
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" inputmode="numeric" step="0.1"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						10
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" inputmode="decimal" step="0.1"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						11
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" inputmode="decimal" step="0.25"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						12
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" inputmode="decimal"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						13
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" type="number" inputmode="decimal"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						14
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="input"
							type="number"
							inputmode="decimal"
							pattern="[0-9]*"
						></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						15
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="input"
							type="number"
							inputmode="decimal"
							pattern="[0-9]*"
							step="0.25"
						></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						16
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="input"
							inputmode="decimal"
							pattern="[0-9]*"
							step="0.25"
						></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						17
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" inputmode="decimal" pattern="[0-9]*"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column xs={5} md={6}>
						18
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control as="input" inputmode="decimal" step="0.25"></Form.Control>
						<Form.Control.Feedback type="invalid">Error</Form.Control.Feedback>
					</Col>
				</Form.Group>

				{/*
				//
				//
				//
				//
				*/}
				<Form.Group as={Row}>
					<Form.Label htmlFor="taxYear" column xs={5} md={6}>
						Tax year
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="select"
							id="taxYear"
							name="taxYearIndex"
							defaultValue=""
							required
							onChange={handleChange}
						>
							<option disabled value="">
								Select
							</option>
							{taxData.map((years, i) => (
								<option key={i} value={i}>
									{years.taxYear}
								</option>
							))}
						</Form.Control>
						<Form.Control.Feedback type="invalid">Select a tax year.</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label htmlFor="income" column xs={5} md={6}>
						{employmentType === 'salaried' ? 'Base salary' : 'Profit'}
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="input"
							id="income"
							name="baseIncome"
							type="number"
							pattern="[0-9]*"
							step="any"
							required
							value={baseIncome}
							onChange={handleChange}
						></Form.Control>
						<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label htmlFor="creditPoints" column xs={5} md={6}>
						Tax credit points
					</Form.Label>
					<Col xs={7} md={6}>
						<Form.Control
							as="input"
							id="creditPoints"
							name="creditPoints"
							type="number"
							pattern="[0-9]*"
							step="0.25"
							className={'not-required'}
							value={creditPoints}
							onChange={handleChange}
						></Form.Control>
						<Form.Control.Feedback type="invalid">
							Credit points must be in quater increments.
						</Form.Control.Feedback>
					</Col>
				</Form.Group>
				<fieldset>
					<Form.Label as="legend">Contributions</Form.Label>
					<fieldset>
						<Form.Group as={Row}>
							<Form.Label as="legend" column xs={5} md={6}>
								Pension
							</Form.Label>
							<Col xs={7} md={6}>
								<Form.Check inline>
									<Form.Check.Input
										defaultChecked
										type="radio"
										id="pensionlMin"
										name="pensionOption"
										value="legalMin"
										onChange={handleChange}
									/>
									<Form.Check.Label htmlFor="pensionlMin">Legal minium</Form.Check.Label>
								</Form.Check>
								<Form.Check inline>
									<Form.Check.Input
										type="radio"
										id="pensionlExtra"
										name="pensionOption"
										value="additional"
										onChange={handleChange}
									/>
									<Form.Check.Label htmlFor="pensionlExtra">Additional</Form.Check.Label>
								</Form.Check>
							</Col>
						</Form.Group>
						{pensionOption === 'additional' && (
							<Form.Group as={Row}>
								<Form.Label htmlFor="pensionPercent" column xs={5} md={6}>
									Total contribution
								</Form.Label>
								<Col xs={7} md={6}>
									<InputGroup>
										<FormControl
											as="input"
											id="pensionPercent"
											name="pensionPercent"
											type="number"
											pattern="[0-9]*"
											step="0.1"
											min="1"
											max="100"
											value={pensionPercent}
											onChange={handleChange}
											required
										/>
										<InputGroup.Append>
											<InputGroup.Text>%</InputGroup.Text>
										</InputGroup.Append>
										<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
									</InputGroup>
								</Col>
							</Form.Group>
						)}
					</fieldset>
					<Form.Group as={Row}>
						<Form.Label htmlFor="educationFund" column xs={5} md={6}>
							Education fund
						</Form.Label>
						<Col xs={7} md={6}>
							<InputGroup>
								<FormControl
									as="input"
									id="educationFund"
									name="educationFund"
									type="number"
									pattern="[0-9]*"
									step="0.1"
									min="1"
									max="100"
									value={educationFund}
									onChange={handleChange}
									className={'not-required'}
								/>
								<InputGroup.Append>
									<InputGroup.Text>%</InputGroup.Text>
								</InputGroup.Append>
								<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
							</InputGroup>
						</Col>
					</Form.Group>
				</fieldset>
				{employmentType === 'salaried' && (
					<>
						<fieldset>
							<Form.Label as="legend">Allowances</Form.Label>
							<Form.Group as={Row}>
								<Form.Label htmlFor="travelAllowance" column xs={5} md={6}>
									Travel
								</Form.Label>
								<Col xs={7} md={6}>
									<Form.Control
										as="input"
										id="travelAllowance"
										name="travelAllowance"
										type="number"
										pattern="[0-9]*"
										step="any"
										value={travelAllowance}
										onChange={handleChange}
										className={'not-required'}
									></Form.Control>
									<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label htmlFor="lunchAllowance" column xs={5} md={6}>
									Lunch
								</Form.Label>
								<Col xs={7} md={6}>
									<Form.Control
										as="input"
										id="lunchAllowance"
										name="lunchAllowance"
										type="number"
										pattern="[0-9]*"
										step="any"
										value={lunchAllowance}
										onChange={handleChange}
										className={'not-required'}
									></Form.Control>
									<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
								</Col>
							</Form.Group>
						</fieldset>
						<fieldset>
							<Form.Label as="legend">Incentives</Form.Label>
							<Form.Group as={Row}>
								<Form.Label htmlFor="annualBonus" column xs={5} md={6}>
									One-time bonus or gift
								</Form.Label>
								<Col xs={7} md={6}>
									<Form.Control
										as="input"
										id="annualBonus"
										name="annualBonus"
										type="number"
										pattern="[0-9]*"
										step="any"
										value={annualBonus}
										onChange={handleChange}
										className={'not-required'}
									></Form.Control>
									<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label htmlFor="commission" column xs={5} md={6}>
									Commission
								</Form.Label>
								<Col xs={7} md={6}>
									<Form.Control
										as="input"
										id="commission"
										name="commission"
										type="number"
										pattern="[0-9]*"
										step="any"
										value={commission}
										onChange={handleChange}
										className={'not-required'}
									></Form.Control>
									<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label htmlFor="overtime" column xs={5} md={6}>
									Overtime
								</Form.Label>
								<Col xs={7} md={6}>
									<Form.Control
										as="input"
										id="overtime"
										name="overtime"
										type="number"
										pattern="[0-9]*"
										step="any"
										value={overtime}
										onChange={handleChange}
										className={'not-required'}
									></Form.Control>
									<Form.Control.Feedback type="invalid">{invalidNum}</Form.Control.Feedback>
								</Col>
							</Form.Group>
						</fieldset>
					</>
				)}
				<Button type="submit" variant="primary">
					Calculate
				</Button>
			</Form>
		</section>
	);
}

NetPayForm.propTypes = {
	handleSubmit: func,
	handleChange: func,
	stateData: shape({
		taxData: netPayType.taxData,
		baseIncome: netPayType.baseIncome,
		creditPoints: netPayType.creditPoints,
		pensionOption: netPayType.pensionOption,
		pensionPercent: netPayType.pensionPercent,
		educationFund: netPayType.educationFund,
		travelAllowance: netPayType.travelAllowance,
		lunchAllowance: netPayType.lunchAllowance,
		annualBonus: netPayType.annualBonus,
		commission: netPayType.commission,
		overtime: netPayType.overtime,
		validated: netPayType.validated
	})
};

export default NetPayForm;
