import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='py-10 text-center'>
            <img src={logo} alt="" className='mx-auto' />
            <p className='text-lg font-semibold text-[#706F6F] py-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-semibold text-[#403F3F]'>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
    );
};

export default Header;