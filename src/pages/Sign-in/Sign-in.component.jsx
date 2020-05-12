import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import './sign-in.component.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                  email : '',
                password : ''
        };
     
    }   
    handleSubmit= event => {
            event.preventDefault();
            this.setState({
                email:'',
                password:''});
            
        }
        handleChange = event =>{
            const {value,name}= event.target;
            this.setState({ [name]: value });
        }
    render(){
       return(
       <div className='sign-in'>
       <h2>i have accout </h2>
        <span>signin with email </span>

        <form onSubmit={this.handleSubmit}> 
         <FormInput name ="email"
          type= "email" 
          value ={this.state.email}
          handleChange={this.handleChange}
          label="lish"
           required/> 

         <label>email</label> 

         <FormInput name ="password" 
         type= "password" 
         value ={this.state.password} 
         handleChange={this.handleChange}
        label='password'
         required/>

        

         <CustomButton type="submit" value="submit"> Sumit</CustomButton>
         </form>
        </div>)
    }
}
export default SignIn;