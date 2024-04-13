
const form=document.getElementById('Data-form');


form.addEventListener('submit',sendmail);

async function sendmail(e){
    try{    
        e.preventDefault(); 
        const details={
            email:e.target.email.value
        }
        const response=await axios.post(`http://16.171.13.135:3000/password/forgotpassword`,details); 
        console.log(response); 
    }   
    catch(err){
        console.log(err);
    }
}
