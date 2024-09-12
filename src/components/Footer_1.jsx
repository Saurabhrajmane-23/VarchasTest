import logo from '../assets/logo.png'
import Llogo from '../assets/LinkedI.png'
import InstaLogo from '../assets/Insta.png'
import mailLogo from '../assets/mail-svgrepo-com.png'
function Footer_1 () {
  return (
    <div className='font-robm bg-[#000000]'>
      <div className='w-screen flex justify-between flex-col md:flex-row lg:flex-row pb-12'>
        {/* Logo Div */}
        <div className='pl-10 w-full md:w-1/2 lg:w-1/2 mr-10 my-auto h-inherit space-y-5'>
          <img src={logo} alt='' />
        </div>

        {/* Address and Contacts div */}
        <div className='md:w-2/3 flex flex-col md:flex-row justify-between w-fit md:justify-between'>
        {/* Address Div */}
          <div className='mx-auto w-[100vw] md:w-[20vw] pl-2 text-center flex flex-col pt-4'>
            <div className='text-white text-2xl mb-4 '>Address</div>
            <div className='text-[#d1cbcb] hover:text-yellow-400 transition-colors duration-1000 ease-in-out text-lg leading-10'>
              Indian Institute of Technology Jodhpur NH 62 Nagaur Road Karwar
              342030, Jodhpur District
            </div>
          </div>
{/* Contacts Div */}
          <div className='mx-auto text-center pl-2 flex flex-col w-full md:w-1/3 pt-4'>
            <div className='text-white text-2xl pb-4'>
              Contacts
            </div>
            <div className='text-gray-100 text-lg'>
              <ul className='text-wrap  text-lg leading-10'>
              <li className="text-[#d1cbcb] hover:text-yellow-400 transition-colors duration-1000 ease-in-out">
                Preetam PR{' '}
                <a href="tel:9950178420">9950178420</a>
            </li>
            <li className="text-[#d1cbcb] hover:text-yellow-400 transition-colors duration-1000 ease-in-out">
              Kowshika PR{' '}
              <a href="tel:7386140537">7386140537</a>
            </li>
            <li className="text-[#d1cbcb] hover:text-yellow-400 transition-colors duration-1000 ease-in-out">
              Email Us@{' '}
              <a href="mailto:pr_varchas@iitj.ac.in">
                pr_varchas@iitj.ac.in
              </a>
            </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white flex justify-between pr-12 pb-7'>
        <div className='w-1/2 md:w-1/3 pl-12 hover:text-yellow-400 transition-colors duration-1000 ease-in-out'>
        &copy; IIT Jodhpur, India All Rights Reserved
        </div>
        <div className='flex w-1/5 justify-around'>
        <div className='w-6'>
          <a href='http://www.linkedin.com/in/varchas-inter-college-sports-fest-of-iit-jodhpur' target='none'> <img src={Llogo}alt="" /></a>
          
        </div>
        <div className='w-8'>
          <a href='https://www.instagram.com/varchas_iitj?igsh=MXdqaXl3ZGU2djd6Mg==' target='none'> <img src={InstaLogo} alt="" /></a>
        </div>
        <div className='w-6'>
          <a href='mailto:pr_varchas@iitj.ac.in' target='none'> <img src={mailLogo} alt="" /></a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer_1
