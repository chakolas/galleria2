import React from 'react'
import {Media,Details,Footer} from './galleria'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from "@material-ui/styles"
import {
  CssBaseline,
  Typography,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

class App extends React.Component {
	state = {
		data: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appmJ5pAu1iQmZyal/galleria?api_key=keyKJ9xVsfuwehiME')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ data: res.records })
			})
			.catch(error => console.log(error))
	}

  render(){
		const {data} = this.state
			return (
				<ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography style={{ marginTop: 50 }}>
	  
				
		    	<Grid container direction='row'>
		     	{data.map(book => (
		      		<Details {...book.fields} key={book.fields.id} />
					))}
				</Grid>
				</Typography>
				<Media />
					<Footer />
				</ThemeProvider>
			)
		}
}

export default App
