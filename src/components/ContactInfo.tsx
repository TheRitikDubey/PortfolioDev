import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
const ContactInfo = () => {
  return (
    <div className='flex gap-12 justify-center text-white flex-col items-baseline h-full'>
                <div className='flex gap-4 items-center justify-center'>
                  <Mail />
                  <div>
                    <h2>Email</h2>
                    <p>ritik.dubeyy20@gmail.com</p>
                  </div>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                <Phone />
                  <div>
                    <h2>Phone</h2>
                    <p>+91 8340613998</p>
                  </div>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                <MapPin />
                  <div>
                    <h2>Location</h2>
                    <p>India</p>
                  </div>
                </div>
                <div className=''>
                  <h2 className='text-center'>Connect</h2>
                  <div className='flex mt-4 gap-8 items-center'> 
                  <Linkedin className='hover:cursor-pointer' />
                  <Github className='hover:cursor-pointer' />
                  <Instagram className='hover:cursor-pointer' />
                  </div>
                </div>
              </div>
  )
}

export default ContactInfo