import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './CenteredTabs.css'


let navbar=[{
    item:'Accueil',
    path: '/'
    },
    {
        item:'Personnaliser',
        path: '/personnaliser'
    },
    {
        item:'Nouveautés',
        path: '/nouveautés'
    },
    {
        item:'Contactez-nous',
        path: '/contact'
    }]

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        
      >
          {navbar.map((el,i)=>(
            <Tab label={el.item} component={Link} to={el.path} />
            // <Link to={el.path}><Tab label={el.item}/></Link>
        ))}
        
      </Tabs>
    </Paper>
  );
}
