import React, { useState, useEffect } from 'react';
import TallyCounter from '../components/TallyCounter';
import { calculateTimeLeft } from '../utils';
import styled from 'styled-components';

const Counter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TallyContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 30px;

	@media (max-width: 375px) {
		margin: 0px 5px 0px 5px;
	}
`;

const TallyLabels = styled.div`
	color: hsl(237, 18%, 59%);
	text-transform: uppercase;
	margin-top: 20px;
	letter-spacing: 4px;
	font-weight: 700;
	font-size: 14px;
	text-align: center;

	@media (max-width: 375px) {
		font-size: 8px;
	}
`;

const Tally = () => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<Counter>
			{Object.keys(timeLeft).map((key) => (
				<TallyContainer>
					<TallyCounter count={timeLeft[key]} />
					<TallyLabels>{key}</TallyLabels>
				</TallyContainer>
			))}
		</Counter>
	);
};

export default Tally;
