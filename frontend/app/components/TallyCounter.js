import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
	height: 140px;
	width: 140px;
	position: relative;
	margin: 10px;
	border-bottom: 8px solid #1a1a22;
	border-radius: 10px;
	transform-style: preserve-3d;
	transition: all 0.5s linear;

	@media (max-width: 375px) {
		height: 80px;
		width: 80px;
		margin: 0px;
		border-bottom: 4px solid #1a1a22;
	}
`;

const FirstHalf = styled.div`
	height: 50%;
	background: #2c2c44;
	border-radius: 10px 10px 0px 0px;

	&::before {
		content: ' ';
		position: absolute;
		left: 0;
		top: 50%;
		transform: rotate(90deg) translate(-33%, 3px);
		height: 10px;
		width: 15px;
		border-radius: 15px 15px 0 0;
		background-color: #231d2a;
	}
	&::after {
		content: ' ';
		position: absolute;
		right: 0;
		top: 50%;
		transform: rotate(270deg) translate(5px, 3px);
		height: 10px;
		width: 15px;
		border-radius: 15px 15px 0 0;
		background-color: #231d2a;
	}
`;

const Overlay = styled.div`
	border-radius: 10px 10px 0px 0px;
	height: 67px;
	position: relative;
	background: rgba(0, 0, 0, 0.2);
	z-index: 1111;

	@media (max-width: 375px) {
		height: 38px;
	}
`;

const SecondHalf = styled.div`
	background: #34364f;
	height: 50%;
	border-top: 0.5px solid hsl(234, 17%, 12%);
	@media (max-width: 375px) {
		border-radius: 8px;
	}
`;

const TallyText = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 76px;
	color: hsl(345, 95%, 68%);

	@media (max-width: 375px) {
		font-size: 34px;
	}
`;

const TallyCounter = ({ count }) => {
	const [shouldFlip, setShouldFlip] = useState(false);

	useEffect(() => {
		setShouldFlip(!shouldFlip);
	}, [count]);

	return (
		<CounterContainer className={`${shouldFlip ? 'should-flip' : 'should-not-flip'}`}>
			<FirstHalf>
				<Overlay />
			</FirstHalf>
			<SecondHalf />
			<TallyText>{count}</TallyText>
		</CounterContainer>
	);
};

export default TallyCounter;
