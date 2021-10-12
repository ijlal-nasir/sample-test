import React from 'react';
import styled from 'styled-components';
import Tally from './Tally';
import FooterSocialLinks from './FooterSocialLinks';

const Title = styled.h1`
	color: #fff;
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 700;
	letter-spacing: 7px;
	text-align: center;

	@media (max-width: 375px) {
		margin-top: 140px;
		margin-bottom: 80px;
		font-size: 20px;
	}
`;

const Container = styled.section`
	height: 100vh;
	width: 100vw;
	background-color: hsl(266, 19%, 14%);
`;

const Overlay = styled.div`
	height: 100%;
	width: 100%;
	background-image: url('/graphics/bg-stars.svg');
`;

const Background = styled.section`
	height: 100%;
	width: 100%;
	background: url('/graphics/pattern-hills.svg') no-repeat bottom center;
	background-size: contain;

	@media (max-width: 375px) {
		background-size: 170% 20%;
	}
`;

const Center = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 375px) {
		justify-content: flex-start;
		position: relative;
	}
`;

const ComingSoon = () => {
	return (
		<Container>
			<Overlay>
				<Background>
					<Center>
						<Title>We're Launching Soon</Title>
						<Tally />
						<FooterSocialLinks />
					</Center>
				</Background>
			</Overlay>
		</Container>
	);
};

export default ComingSoon;
