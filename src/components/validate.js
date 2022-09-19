export const validate=data =>{
    const errors={}
    console.log(data);
    if (!data.name.trim()){
        errors.name="Username requeired"
    } else {
        delete errors.name;
    }

    if(!data.email){
       errors.email="Email requierd";
    } else if(!(/\S+@\S+\.\S+/.test(data.email))) {
        errors.email="Email address is invalid"
    } else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password="Password is required"
    } else if (data.password.length < 6 ) {
        errors.password="Password need to be 6 character or more"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword ="confirm password is requied"
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword="password do not match"
    } else {
        delete errors.confirmPassword
    }

    if(data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "requierd"
    }
     
    return errors;

}