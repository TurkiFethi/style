import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import './SubMenu.css'
import { width } from '@material-ui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 370,
   // border: 'solid',
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 'max-content',
    minHeight: 'max-content'

  },
  sarra : {
    border: 'none'
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={clsx(classes.root, classes.sarra)}>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        onMouseOver={handleChange}
        onMouseLeave={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Mode Homme" {...a11yProps(0)} />
        <Tab label="Mode Femme" {...a11yProps(1)} />
        <Tab label="Mode Enfant" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0} className="test">
        <div className="type-category">
        <div className="vetements">
        <a href="#" className="type">Vetements</a>
        <a href="#">Pulls & Polos</a>
        <a href="#">Maillots de football & T-Shirts</a>
        <a href="#">Chemises</a>
        <a href="#">Pantallons</a>
        </div>
        <div className="vetements">
        <a href="#" className="type">Chaussures</a>
        <a href="#">Chaussures de sports</a>
        <a href="#">Chaussures classiques</a>
        <a href="#">Mocassins</a>
        </div>
        <div className="vetements">
        <a href="#" className="type">Accessoires</a>
        <a href="#">Bonnets,Gants&Echarpes</a>
        <a href="#">Lunettes de soleil</a>
        <a href="#">Ceintures</a>
        <a href="#">Chapeaux & Casquettes</a>
        </div>
        </div>

      </TabPanel>
      <TabPanel value={value} index={1} className="test">
      <div className="type-category">
        <div className="vetements">
        <a href="#" className="type">Vetements</a>
        <a href="#">Pulls & Polos</a>
        <a href="#">Jupes</a>
        <a href="#">Ensembles</a>
        <a href="#">Vestes & Chemises</a>
        </div>
        <div className="vetements">
        <a href="#" className="type">Chaussures</a>
        <a href="#">Tongs & Sabots</a>
        <a href="#">Chaussures de sports</a>
        <a href="#">Chaussures classiques</a>
        <a href="#">Mocassins</a>
        </div>
        <div className="vetements">
        <a href="#" className="type">Accessoires</a>
        <a href="#">Bonnets,Gants&Echarpes</a>
        <a href="#">Lunettes de soleil</a>
        <a href="#">Ceintures</a>
        <a href="#">Chapeaux & Casquettes</a>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className="test">
      <div className="type-category">
        <div className="vetements">
        <a href="#" className="type">Vetements</a>
        <a href="#">Pulls & Polos</a>
        <a href="#">Maillots de football & T-Shirts</a>
        <a href="#">Chemises</a>
        <a href="#">Pantallons</a>
        </div>
        <div className="vetements">
        <a href="#" className="type">Chaussures</a>
        <a href="#">Chaussures de sports</a>
        <a href="#">Chaussures classiques</a>
        <a href="#">Mocassins</a>
        </div>
        <div className="vetements">
        <a href="#" className="type">Accessoires</a>
        <a href="#">Bonnets,Gants&Echarpes</a>
        <a href="#">Lunettes de soleil</a>
        <a href="#">Ceintures</a>
        <a href="#">Chapeaux & Casquettes</a>
        </div>
        </div>
      </TabPanel>
    </div>
  );
}
