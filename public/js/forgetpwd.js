
const form=document.getElementById('Data-form');


form.addEventListener('submit',sendmail);

async function sendmail(e){
    try{    
        e.preventDefault(); 
        const details={
            email:e.target.email.value
        }
        const response=await axios.post(`http://13.53.39.202:3100/password/forgotpassword`,details); 
        console.log(response); 
    }   
    catch(err){
        console.log(err);
    }
}
