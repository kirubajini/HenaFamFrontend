import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import PoultryBreeds from './PoultryBreeds';
import PoultryManagement from './PoultryManagement';
import PoultryFeed from './PoultryFeed';
import PoultryDiases from './PoultryDiases';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        
      <AppBar position="static">
        <Tabs style={{marginLeft:150}}
          // variant="fullWidth"
          value={value}
          onChange={handleChange}
          // aria-label="nav tabs example"
        >
          <LinkTab label="breed" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="feed" href="/trash" {...a11yProps(1)} />
          <LinkTab label="management" href="/spam" {...a11yProps(2)} />
          <LinkTab label="diseases" href="/spam" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <div style={{height:"auto"}}>
      <TabPanel value={value} index={0}>
        <PoultryBreeds/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PoultryFeed/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <PoultryManagement/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PoultryDiases/>
      </TabPanel>
      </div>
    
    </div>
  );
}

