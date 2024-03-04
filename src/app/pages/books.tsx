'use client'
import { Box, Flex, Heading, Icon, Image } from '@chakra-ui/react'
import { NextPageWithLayout } from 'next'
import React, { useEffect } from 'react'

interface IBook {
	title: string
	coverUrl: string
	spineBackgroundColor: string
	spineForegroundColor: string
}

const books: IBook[] = [
	{
		title: 'The Last Sword Maker',
		coverUrl: '/lastSwordMakerCover.jpg',
		spineBackgroundColor: '#311212',
		spineForegroundColor: '#fff',
	},
	{
		title: 'Five Tribes',
		coverUrl: '/fiveTribesCover.jpg',
		spineBackgroundColor: '#d39d32',
		spineForegroundColor: '#fff',
	},
	{
		title: 'The Great Unmaking',
		coverUrl: '/greatUnmakingCover.jpg',
		spineBackgroundColor: '#3e7c9e',
		spineForegroundColor: '#fff',
	},
]

const Books: NextPageWithLayout = () => {
	const [bookIndex, setBookIndex] = React.useState(-1)
    
	const width = 55
	const height = 400

	const spineWidth = `${width}px`
	const coverWidth = `${width * 5.5}px`
	const bookWidth = `${width * 6}px`
	const bookHeight = `${height}px`

	return (
		<>
			<svg
				style={{
					position: 'absolute',
					inset: 0,
					visibility: 'hidden',
				}}
			>
				<defs>
					<filter id='paper' x='0%' y='0%' width='100%' height='100%'>
						<feTurbulence
							type='fractalNoise'
							baseFrequency='0.9'
							numOctaves='8'
							result='noise'
						/>
						<feDiffuseLighting
							in='noise'
							lightingColor='white'
							surfaceScale='1'
							result='diffLight'
						>
							<feDistantLight azimuth='45' elevation='35' />
						</feDiffuseLighting>
					</filter>
				</defs>
			</svg>
			<Flex
				alignItems='center'
				gap={4}
				width='container.xs'
				overflowX='hidden'
			>
				{books.map((book, index) => (
					<button
						key={index}
						onClick={() => {
							if (index === bookIndex) {
								setBookIndex(-1)
							} else {
								setBookIndex(index)
							}
						}}
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							outline: 'none',
							flexShrink: 0,
							transform: `translateX(0px)`,
							width: bookIndex === index ? bookWidth : spineWidth,
							perspective: '1000px',
							WebkitPerspective: '1000px',
							gap: '0px',
							transition: `width 500ms ease, transform 500ms ease`,
							willChange: 'auto',
						}}
					>
						<Flex
							alignItems='flex-start'
							justifyContent='center'
							width={spineWidth}
							height={bookHeight}
							flexShrink={0}
							transformOrigin='right'
							backgroundColor={book.spineBackgroundColor}
							color={book.spineForegroundColor}
							transform={`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
								bookIndex === index ? '-60deg' : '0deg'
							}) rotateZ(0deg) skew(0deg, 0deg)`}
							transition={'all 500ms ease'}
							willChange='auto'
							filter='brightness(0.8) contrast(2)'
							style={{
								transformStyle: 'preserve-3d',
							}}
						>
							<span
								style={{
									pointerEvents: 'none',
									position: 'fixed',
									top: 0,
									left: 0,
									zIndex: 50,
									height: bookHeight,
									width: spineWidth,
									opacity: 0.4,
									filter: 'url(#paper)',
								}}
							/>
							<Heading
								mt='20px'
								as='h2'
								style={{ writingMode: 'vertical-lr' }}
								fontSize='2xl'
								fontFamily={`"DM Sans", sans-serif`}
								userSelect='none'
							>
								{book.title}
							</Heading>
						</Flex>
						<Box
							position='relative'
							flexShrink={0}
							overflow='hidden'
							transformOrigin='left'
							transform={`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
								bookIndex === index ? '30deg' : '88.4deg'
							}) rotateZ(0deg) skew(0deg, 0deg)`}
							transition={'all 500ms ease'}
							willChange='auto'
							filter='brightness(0.8) contrast(2)'
							style={{
								transformStyle: 'preserve-3d',
							}}
						>
							<span
								style={{
									pointerEvents: 'none',
									position: 'fixed',
									top: 0,
									right: 0,
									zIndex: 50,
									height: bookHeight,
									width: coverWidth,
									opacity: 0.4,
									filter: 'url(#paper)',
								}}
							/>
							<span
								style={{
									pointerEvents: 'none',
									position: 'absolute',
									top: 0,
									left: 0,
									zIndex: 50,
									height: bookHeight,
									width: coverWidth,
									background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
								}}
							/>
							<Image
								src={book.coverUrl}
								alt={book.title}
								width={coverWidth}
								height={bookHeight}
								style={{
									transition: 'all 500ms ease',
									willChange: 'auto',
								}}
							/>
						</Box>
					</button>
				))}
			</Flex>
		</>
	)
}

export default Books
