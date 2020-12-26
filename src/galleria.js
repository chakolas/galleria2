import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

const Style1 = makeStyles(theme => ({
	root: {
	},
	gutterTopAndBottom: {
		margin: 20
	},
	card: {
		maxWidth: 1920
	},
	media: {
		height: 980,
		width: 1920
	}
	}))
	

const Style2 = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		margin: 20
	},
	gutterTopAndBottom: {
		margin: 20
	},
	card: {
		maxWidth: 1920
	},
	media: {
		height: 1080,
		width: 1920
		}
	}))

	
const Style3 = makeStyles(theme => ({
	root: {
	},
	gutterTopAndBottom: {
		margin: 20
	},
	card: {
		maxWidth: 1920
	},
	media: {
		height: 90,
		width: 1920
	}
	}))

function Details({Image}) {
	const classes = Style1()
	return (
		<div className={classes.root}>
			{/*<Grid container direction='row' align="center" justify="center">
				<Card className={classes.card}>
				<CardActionArea>
				<CardMedia className={classes.media} image='http://192.168.1.74:8080/Chakolas_Video/galleria.png' title='Event' />
				</CardActionArea>
				</Card>
	</Grid>*/}
	</div>
	)
}
function Media() {
	const classes = Style2()
	return (
		<div className={classes.root}>
			<Grid container direction='row' align="center" justify="center">
		<video autoplay="true" muted="true" width='1920' height='900' preload='true' loop='true' controls controlsList="nodownload">
			{/*<source src='http://192.168.1.74:8080/Chakolas_Video/Chakolas.mp4'/>*/}
		<source src= 'https://res.cloudinary.com/chakolas/video/upload/v1606558971/Chakolas_1_ictscg.mp4'/>
		</video>
	</Grid>
		</div>
		)
	}

	
function Footer({Image}) {
	const classes = Style3()
	return (
		<div className={classes.root}>
			<Grid container direction='row' align="center" justify="center">
				<Card className={classes.card}>
				<CardActionArea>
				<CardMedia className={classes.media} image='https://chakolas.github.io/images/BG1920.png' title='Event' />
				</CardActionArea>
				</Card>
	</Grid>
	</div>
	)
}

export {
	Details,
	Media,
	Footer
}
