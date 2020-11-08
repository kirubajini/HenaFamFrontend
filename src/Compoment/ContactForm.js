// import React, { Component } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import ReplayIcon from '@material-ui/icons/Replay';
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import UpdateIcon from '@material-ui/icons/Update';
// import Select from '@material-ui/core/Select';




// const style = {
//   root: {
//     minWidth: 275,
//    // backgroundColor:'#212121',
//     marginTop: 50,
//     color: '#e0f7fa'
//   },
//   button: {
//     fontSize: '20px'
//   },
//   formControl: {
//    // margin: spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     //marginTop: spacing(2),
//   },
// }

// export default class ContactForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Name: "",
//       Email: "",
//       Address: "",
//       Mobile: "",
//       Comment: "",
      
//       successful: false
//     };
//   }

//   onChangeName = (event) => {
//     this.setState({
//       Name: event.target.value
//     });
//   }

//   onChangeEmail = (event) => {
//     this.setState({
//       Email: event.target.value
//     });
//   }

//   onChangeAddress = (event) => {
//     this.setState({
//       Address: event.target.value
//     });
//   }

  

//   onChangeMobile = (event) => {
//     this.setState({
//       Mobile: event.target.value
//     });
//   }

//   onChangeComment = (event) => {
//     this.setState({
//       Comment: event.target.value
//     });
//   }

  
//   handleAddBook = (event) => {
//     event.preventDefault();

//     if (this.state.Name && this.state.Email && this.state.Company && this.state.Mobile && this.state.Comment) {
//       console.log(this.state.Name + " " + this.state.Email + " " + this.state.Company + "" +this.state.Mobile + ""+ this.state.Comment)
//       this.setState({
//         successful: true,
//         message: "Success -Book Saved Successfully."
//       })
//     } else {
//       this.setState({
//         successful: false,
//         message: "Not valied"
//       })
//     }
//   }

//   render() {
//     return (
//         <Grid container spacing={1}>
//         {/* <Grid item xs={4}/> */}
//         <Grid item xs={12} style={{border:'1px solid black',boxShadow:"10px 5px 25px",marginRight:60,marginLeft:170}}>
//           <Card className={style.root} style={{margin:10,height:392,marginRight:20}}>
//            <CardContent>
//            <Paper variant="outlined" style={{height:360,backgroundColor:"#e0e0e0",borderRadius:50}}>
//              <form className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
//                   {!this.state.successful && (
//              <Grid container spacing={1}>
//                       {/* <Grid item xs={11}>
                        
//                       <h3 style={{fontSize:30,color:"#1a237e"}}>Add User</h3>
                    
                       
//                       </Grid> */}
//                       <Grid item xs={12}>
                        
//                         <FormControl>
                            
//                         <TextField type="text" id="outlined-required" label="Name" variant="outlined" helperText="Enter your name" style={{width:"120%",marginLeft:20,marginTop:15}} onChange={this.onChangeName} />
//                         </FormControl>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                        
//                         <FormControl>
//                         <TextField type="text" id="outlined-required" label="Email" variant="outlined" helperText="Enter your Email address" style={{width:"120%",marginTop:15}} onChange={this.onChangeEmail} />
//                         </FormControl>&emsp; &emsp; &emsp; 
                        
                        
      
      
//                       &emsp; &emsp; 
//                         </Grid>
                         
//                         <Grid item xs={12}>
//                         <FormControl >
//                         <TextField type= "" id="outlined-required" label="Mobile" variant="outlined" helperText="Enter your mobile number "  style={{width:"120%",height:"800",marginLeft:20}} onChange={this.onChangeMobile}/>
//                         </FormControl> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                      

                      
//                         <FormControl>
//                         <TextField type="" id="outlined-required" label="Address" variant="outlined" helperText="Enter your address"  style={{width:"120%"}}onChange={this.onChangeAddress} />
//                         </FormControl>
//                         </Grid>

//                         <Grid item xs={12}>
                        

//                         {/* <FormControl >
//                         <textarea type= "" id="outlined-required" label="Comment" variant="outlined" helperText="Enter your comment about our work " style={{width:"120%",height:80,marginLeft:120,backgroundColor:"#e0e0e0"}} onChange={this.onChangeComment}/>
//                         </FormControl> */}
                        

                        
//                           &emsp; &emsp; 
//                        </Grid>
//                        {/* <Paper variant="outlined"> */} 
                        
//                         <Grid item xs={12}>
//                         <br/> <br/>
//                         <Button href="/Send" variant="contained"onClick={this.handleAddBook} style={{backgroundColor:'#926F34',marginLeft:300}}> <SaveIcon style={{fontSize:20}}/>Send</Button>&emsp; 
//                         {/*<Button  href="/Reset"variant="contained" style={{backgroundColor:'#0d47a1'}}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp;
//                     <Button href="/upadate" variant="contained" style={{backgroundColor:'#0d47a1'}}><UpdateIcon style={{fontSize:20}}/>Update</Button> 
//                     </Paper>*/}  
//                   </Grid> 
//                  </Grid>   
//                  )}
//                  {this.state.message && (
//                <div>
//                  <Typography color='#d50000' variant="overline" display="block" gutterBottom> 
//                      <strong>{this.state.message}</strong>
//                  </Typography>
//                  </div>
//                  )} 
                 
//                 </form>
//                 </Paper>
//               </CardContent>
//         </Card>
//         </Grid>
//         {/* <Grid item xs={4}/> */}
//       </Grid>
//     );
                            
// }
// }
  
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import UpdateIcon from '@material-ui/icons/Update';
import Select from '@material-ui/core/Select';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { TextValidator} from 'react-material-ui-form-validator';






const style = {
  root: {
    minWidth: 275,
   // backgroundColor:'#212121',
    marginTop: 50,
    color: '#e0f7fa'
  },
  button: {
    fontSize: '20px'
  },
  formControl: {
   // margin: spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    //marginTop: spacing(2),
  },
}

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address: "",
      mobile: "",
      comment: "",
      loading:"false",
      
      successful: false
    };
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isName',(value) => {
      if((this.state.name.length>3) && (this.state.name.length<30)){
        return true;
      }
      return false;
    })
    ValidatorForm.addValidationRule('isMobile',(value) => {
      if((this.state.mobile.length>10) && (this.state.mobile.length<30)){
        return true;
      }
      return false;
    })
    ValidatorForm.addValidationRule('isAddress',(value) => {
      if((this.state.address.length>5) && (this.state.address.length<30)){
        return true;
      }
      return false;
    })
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    });
  }

  

  onChangeMobile = (e) => {
    this.setState({
      mobile: e.target.value
    });
  }

  onChangeComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  
  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message:"",
      loading: true
    });



    if (this.state.Name && this.state.Email && this.state.Company && this.state.Mobile && this.state.Comment) {
      console.log(this.state.Name + " " + this.state.Email + " " + this.state.Company + "" +this.state.Mobile + ""+ this.state.Comment)
      this.setState({
        successful: true,
        message: "Success -Book Saved Successfully."
      })
    } else {
      this.setState({
        successful: false,
        message: "All field are required"
      })
    }
  }

  render() {
    return (
        <Grid container spacing={1}>
        {/* <Grid item xs={4}/> */}
        <Grid item xs={12} style={{border:'1px solid black',boxShadow:"10px 5px 25px",marginRight:60,marginLeft:170}}>
          <Card className={style.root} style={{margin:10,height:392,marginRight:20}}>
           <CardContent>
           <Paper variant="outlined" style={{height:360,backgroundColor:"#e0e0e0",borderRadius:50}}>
             <ValidatorForm className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      {/* <Grid item xs={11}>
                        
                      <h3 style={{fontSize:30,color:"#1a237e"}}>Add User</h3>
                    
                       
                      </Grid> */}
                      <Grid item xs={12}>
                        
                        <FormControl>
                            
                        <TextValidator 
                        type="text" 
                        id="outlined-required" 
                        label="Name" 
                        variant="outlined" 
                        helperText="Enter your name" 
                        style={{width:"120%",marginLeft:20,marginTop:15}}
                        value={this.state.name}
                        onChange={this.onChangeName} 
                        validators={['required','isName']}
                        errorMessages = {["This field is not Empty","This field must contain 3character"]}
                         
                         />
                        </FormControl>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                        
                        <FormControl>
                        <TextValidator 
                        type="text" 
                        id="outlined-required" 
                        label="Email" 
                        variant="outlined" 
                        helperText="Enter your Email address" 
                        style={{width:"120%",marginTop:15}} 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validators={['required','isEmail']}
                        errorMessages = {["This field is not Empty"]}
                        />
                        </FormControl>&emsp; &emsp; &emsp; 
                        
                        
      
      
                      &emsp; &emsp; 
                        </Grid>
                         
                        <Grid item xs={12}>
                        <FormControl >
                        <TextValidator 
                        type= "" 
                        id="outlined-required" 
                        label="Mobile" 
                        variant="outlined" 
                        helperText="Enter your mobile number "  
                        style={{width:"120%",height:"800",marginLeft:20}} 
                        value={this.state.mobile}
                        onChange={this.onChangeMobile}
                        validators={['required','isMobile']}
                        errorMessages = {["This field is not Empty","Mobile number must be more than 10 corrector"]}
                        
                        />
                        </FormControl> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                      

                      
                        <FormControl>
                        <TextValidator 
                        type="" 
                        id="outlined-required" 
                        label="Address" 
                        variant="outlined" 
                        helperText="Enter your address" 
                         style={{width:"120%"}}
                         value={this.state.address}
                         onChange={this.onChangeAddress} 
                         validators={['required','isAddress']}
                         errorMessages = {["This field is not Empty","Address must be more than 5 corrector"]}
                         />
                        </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                        

                        {/* <FormControl >
                        <textarea type= "" id="outlined-required" label="Comment" variant="outlined" helperText="Enter your comment about our work " style={{width:"120%",height:80,marginLeft:120,backgroundColor:"#e0e0e0"}} onChange={this.onChangeComment}/>
                        </FormControl>
                         */}

                        
                          &emsp; &emsp; 
                       </Grid>
                       {/* <Paper variant="outlined"> */} 
                        
                        <Grid item xs={12}>
                        <br/> <br/>
                        <Button type="submit"  variant="contained" style={{backgroundColor:'#926F34',marginLeft:300}}> <SaveIcon style={{fontSize:20}}/>Send</Button>&emsp; 
                        {/*<Button  href="/Reset"variant="contained" style={{backgroundColor:'#0d47a1'}}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp;
                    <Button href="/upadate" variant="contained" style={{backgroundColor:'#0d47a1'}}><UpdateIcon style={{fontSize:20}}/>Update</Button> 
                    </Paper>*/}  
                  </Grid> 
                 </Grid>   
                 )}
                 {this.state.message && (
               <div>
                 <Typography color='#d50000' variant="overline" display="block" gutterBottom> 
                     <strong>{this.state.message}</strong>
                 </Typography>
                 </div>
                 )} 
                 
                </ValidatorForm>
                </Paper>
              </CardContent>
        </Card>
        </Grid>
        {/* <Grid item xs={4}/> */}
      </Grid>
    );
                            
}
}
	
	
	

