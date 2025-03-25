import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
const ContactInfo = () => {
  const openConnectWithRitik = (ConnectionType: string) => {
    if(ConnectionType === 'Linkedin'){
      window.open("https://www.linkedin.com/in/theritik-dubey/",'_blank')
    }
    else if(ConnectionType === 'Github'){
      window.open("https://github.com/TheRitikDubey",'_blank')
    }
    else{
      window.open("https://www.instagram.com/the_ritikdubey/",'_blank')
    }
    
  }
  return (
    <div className='flex gap-10 w-full lg:w-[20%] justify-center text-white flex-col p-4 lg:p-0 items-baseline h-full'>
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
        <div className='mx-auto'>
          <h2 className='text-center'>Connect</h2>
          <div className='flex mt-4 gap-8 items-center'> 
            <Linkedin onClick={() => openConnectWithRitik("Linkedin")} className='hover:cursor-pointer' />
            <Github onClick={() => openConnectWithRitik("Github")} className='hover:cursor-pointer' />
            <Instagram onClick={() => openConnectWithRitik("instagram")} className='hover:cursor-pointer' />
          </div>
        </div>
    </div>
  )
}

export default ContactInfo