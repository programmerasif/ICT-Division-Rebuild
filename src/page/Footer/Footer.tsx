import fb from '../../assets/fb.png'
import insta from '../../assets/insta.png'
import linkdin from '../../assets/linkdin.png'
import youtube from '../../assets/youtube.png'
import logo from '../../assets/mainLogo.png'
import "./footer.css";
import { BackgroundBeams } from '@/components/ui/background-beams'
const Footer = () => {
  return (
    <div className="background-footer-image w-full antialiased md:mt-20  mt-10">
      <div className="flex flex-col justify-center items-center px-2 md:px-8 xl:px-16 md:mt-20  mt-10 gap-20  text-white w-full">
        <div className='text-2xl font-bold hidden md:block'>
          Thank you for visiting the web site of Department of Information and
          Communication Technology
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-between items-start w-full gap-5">
          <div className="w-full flex justify-start items-start">
            <div className="flex justify-start  flex-col gap-5 text-start">
                <h3 className="font-bold text-xl">Related information</h3>
                <h5 className="text-gray-200">Law and Justice</h5>
                <h5 className="text-gray-200">Information and broadcasting</h5>
                <h5 className="text-gray-200">Science and technology</h5>
                <h5 className="text-gray-200">Home Affairs and Enforcement</h5>
            </div>
          </div>
          <div className="w-full flex justify-start items-start">
          <div className="flex justify-start  flex-col gap-5 text-start">
                <h3 className="font-bold text-xl">About the government</h3>
                <h5 className="text-gray-200">Constitution of Bangladesh</h5>
                <h5 className="text-gray-200">Government Directory</h5>
                <h5 className="text-gray-200">Member of Parliament</h5>
                <h5 className="text-gray-200">Vice President of Bangladesh</h5>
            </div>
          </div>
          <div className="w-full flex justify-start items-start">
          <div className="flex justify-start  flex-col gap-5 text-start">
                <h3 className="font-bold text-xl">Related information</h3>
                <h5 className='flex justify-start items-center gap-2'>
                    <span> <img src={fb} alt="" /></span>
                    <span className='text-sm text-gray-200' >Connect Facbook</span>
                </h5>
                <h5 className='flex justify-start items-center gap-2'>
                <span> <img src={insta} alt="" /></span>
                <span className='text-sm text-gray-200' >Connect Instagram</span>
                </h5>
                <h5 className='flex justify-start items-center gap-2'>
                <span> <img src={linkdin} alt="" /></span>
                <span className='text-sm text-gray-200' >Connect Linkdin</span>
                </h5>
                <h5 className='flex justify-start items-center gap-2'>
                <span> <img src={youtube} alt="" /></span>
                <span className='text-sm text-gray-200' >Connect YouTube</span>
                </h5>
            </div>
          </div>
          <div className="w-full h-full md:flex justify-end  hidden  items-center border-l-4 border-white">
            <img src={logo} alt=""  className='w-3/5 '/>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Footer;
