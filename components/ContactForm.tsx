
import { Alert, TextField } from '@mui/material'
import { Suspense,  useState } from "react";
import Button from '@mui/material/Button';
import { Canvas } from '@react-three/fiber';
import { Fox } from './Fox';
import emailjs from "@emailjs/browser"
import dotenv from 'dotenv';
import Navbar from './Navbar';
dotenv.config();

type formData = {
  Name: string,
  Email: string,
  Message: string
}

const ContactForm = () => {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

  const [showAlert,setShowAlert]=useState<boolean>(false)
  const [loading,setLoading]=useState<boolean>(false)
  const [dogRun,setDogRun]=useState<boolean>(false)

  const [formData, setFormData] = useState<formData>(
    {
      "Name": null,
      "Email": null,
      "Message": null
    }
  )

  const handleChange = (event, label: string) => {
    // Use the label and value to update the corresponding field in the formData state
    setFormData({
      ...formData,
      [label]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true)
    try {
      const response = await emailjs.send(serviceID, templateID, {
        from_name: formData.Name,
        to_name: "Kritan",
        from_email: formData.Email,
        
        message: formData.Message
      }, publicKey);
        setShowAlert(true);
        setLoading(false)
        setDogRun(true)
        setFormData({
          Email: "",
          Name: "",
          Message: ""
        });
setTimeout(()=>{
  setShowAlert(false);
  setDogRun(false)
},3000)
   
  
      console.log('SUCCESS!', response.status, response.text);
    } catch (error) {
      console.log('FAILED...', error);
    }
  }



  return (
    <div className='flex flex-col relative md:flex-row justify-center item-center w-full p-4 sm:p-6  md:p-12'>   
  <span className="absolute inset-0 z-20 max-w-5xl 
     mx-auto h-[80px]">
    <Navbar/>
  </span>
       {showAlert && (
  <Alert severity="success" className='absolute sm:w-max w-[80%]  top-8 left-[50%] translate-x-[-50%]  ' onClose={() => {setShowAlert(false)}}>
    Thank You! Your message has been delivered successfully.
  </Alert>
)}
      <div className=' w-full md:w-[50%] space-y-6    mt-14 md:mt-8'>

      <h1 className='head-text text-center font-sans'>Get in Touch</h1>
        <form  onSubmit={handleSubmit} className='space-y-6 flex flex-col justify-center items-center'>
          <TextField className='w-[80%] md:w-full lg:w-[80%]' onChange={(e) => { handleChange(e, "Name") }} id="Name" label="Name" value={formData.Name} name="user_name" variant="outlined" />
          <TextField className='w-[80%] md:w-full lg:w-[80%]' onChange={(e) => { handleChange(e, "Email") }} id="Email" label="Email" value={formData.Email} variant="outlined" name="user_email" />
          <TextField className=' w-[80%] md:w-full lg:w-[80%]' onChange={(e) => { handleChange(e, "Message") }}
            id="outlined-multiline-flexible" name="message"
            label="Your Message" value={formData.Message}
            multiline
            minRows={4}
          />
          <Button variant="contained" type='submit' disabled={loading} className='w-[80%] bg-gradient-to-l  from-blue-500 to-blue-700  font-poppins'>
           {loading? "Sending..." : "Send Message"}
            </Button>
        </form>

      </div>
      <div className=' w-full h-[450px] md:h-auto  md:w-[50%]' >
        <Canvas camera={{ near: 0.1, far: 1000 }}>
          <Suspense fallback={null}>
          <directionalLight position={[0, 0, 1]} intensity={0.8} />
          <ambientLight intensity={0.8} />
  
      
            <Fox scale={0.6} position={[0.5, 0.35, 0]} dogRun={dogRun}
              rotation={[12.629, -0.6, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default ContactForm