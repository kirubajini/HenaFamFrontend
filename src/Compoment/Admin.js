import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PeopleIcon from '@material-ui/icons/People';
import Button from '@material-ui/core/Button';
import StorageIcon from '@material-ui/icons/Storage';
import FeedbackIcon from '@material-ui/icons/Feedback';


const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:600
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
     
    },
   
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:"#424242",
      marginTop: 20,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
}


  class Admin extends Component {
    UserAdd = (e) => {
      localStorage.removeItem("isLogin2");
      this.props.history.push('/adduser');
      window.location.reload();
    }
    UserUpdate = (e) => {
      this.props.history.push('/adduser');
      window.location.reload();
    }
    UserView = (e) => {
      this.props.history.push({pathname :'/role_user'});
      window.location.reload();
    }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        {/* <Grid container spacing={1} > */}
          {/* <Grid item xs> */}
          {/* </Grid> */}
          {/* <Grid item xs = {5}> */}
          <center>
          <Paper style={{width:1110}}>
              <Card style={style.root} variant="outlined">
                <div style = {{margin:30} }>
                  <center><h1 style={{fontFamily: 'Raleway',fontSize:60}}><strong>Welcome to Admin Panel</strong></h1></center>
                </div>
                <div style = {{margin:20} }>
                    {/* <Grid container spacing={1}> */}
                        {/* <Grid item xs = {6}> */}
                        <div style={{display:"flex"}}> 
                            <Paper className={classes.paper} style = {{backgroundColor : "#795548",marginLeft:50}}>
                            <center>
                                <PeopleIcon style={{ fontSize: 200,width:300 }}/>
                            </center>
                                <br/>
                                <p style = {{color: "white",fontSize:24,fontFamily: 'Raleway',fontStyle: 'bold',marginLeft:30}}>Manage Users</p>
                                <Button href="/AddUser" style={{fontSize:15,backgroundColor:"black",color:"white",marginLeft:13,marginBottom:14,width:120}}>Add user</Button>&emsp; &emsp;
                                <Button  href="/ViewUser" style={{ float: 'right',backgroundColor:"black",color:"white",marginRight: 13,width:110,marginBottom:0}}>View User</Button>
                            </Paper>
                            {/* </Grid> */}
                        {/* <Grid item xs = {3}/> */}
                        {/* <Grid item xs ={6}> */}
                        <Paper className={classes.paper} style = {{backgroundColor : "#795548",marginLeft:30}}>
                            <center>
                                <StorageIcon style={{ fontSize: 200 }}/>
                            </center>
                                <br/>
                                <p style = {{color: "white",fontSize:24,fontFamily: 'Raleway',fontStyle: 'bold',marginLeft:30}}>Manage Products</p>
                                <Button href="/AddProduct" style={{fontSize:15,backgroundColor:"black",color:"white",marginLeft:8}}>Add Product</Button>&emsp;
                                <Button  href="/ViewProduct" style={{ float: 'right',backgroundColor:"black",color:"white",marginRight:8 }}>View Product</Button>
                                <br/><br/>
                            </Paper>
                        {/* </Grid> */}
                        {/* <Grid item xs = {2}/>
                        <Grid item xs ={5}> */}
                        {/* <Grid item xs = {3}/> */}
                        {/* <Grid item xs = {6} > */}
                        <Paper className={classes.paper} style = {{backgroundColor : "#795548",marginLeft:30,width:300}}>
                            <center>
                                <FeedbackIcon style={{ fontSize: 200 }}/>
                            </center>
                                <br/>
                                <p style = {{color: "white",fontSize:24,fontFamily: 'Raleway',fontStyle: 'bold',textAlign:"center",width:238}}>Manage FeedBack</p>
                                <Button  href="/ViewFeedback" style={{ float: 'right',backgroundColor:"black",color:"white",marginRight:110,marginLeft:20}}>View Feedback</Button>
                                <br/><br/>
                            </Paper>
                            </div>
                        {/* </Grid> */}

                          {/* <Grid container spacing={1} > */}
                          {/* <Grid item xs = {3}/> */}
                        {/* <Grid item xs = {6} > */}
                        {/* <Paper className={classes.paper} style = {{backgroundColor : "#795548"}}>
                            <center>
                                <FeedbackIcon style={{ fontSize: 200 }}/>
                            </center>
                                <br/>
                                <p style = {{color: "white",fontSize:24,fontFamily: 'Raleway',fontStyle: 'bold',marginLeft:80}}> Manage Feedback</p>
                                <Button  href="/ViewFeedback" style={{ float: 'right',backgroundColor:"black",color:"white",marginRight:110,markerMid:50}}>View Product</Button>
                                <br/><br/>
                            </Paper> */}

                        {/* </Grid> */}
                        {/* </Grid> */}
                            
                    {/* </Grid> */}
                </div>
              </Card>
            </Paper>
            </center>
          {/* </Grid> */}
          {/* <Grid item xs> */}
          {/* </Grid> */}
        {/* </Grid> */}
        </div>
    )
  }
}

export default Admin