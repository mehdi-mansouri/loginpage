export const validate=data =>{
    const errors={}

    if (!data.name.trim()){
        errors.name="Username requeired"
    } else {
        delete errors.name;
    }

    if(!data.email){
        errors.email="Email requierd";
    } else if(!/\s+@\s+\.\s+/.test(data.email)) {
        errors.email="Email address is invalid"
    } else {
        delete data.email;
    }

    if(!data.password) {
        errors.password="Password is required"
    } else if (data.password.length < 6 ) {
        errors.password="Password need to be 6 character or more"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmpassword ="confirm password is requied"
    } else if (data.confirmPassword !== data.password) {
        errors.confirmpassword="password do not match"
    } else {
        delete errors.confirmpassword
    }

    if(data.isAccept) {
        delete errors.isAccept
    } else {
        errors.isAccept = "requierd"
    }
     
    return errors;

}