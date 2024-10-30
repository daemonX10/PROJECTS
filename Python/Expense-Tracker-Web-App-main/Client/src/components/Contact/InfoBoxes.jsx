import { FaPhone, FaClock, FaAddressBook, FaEnvelope } from 'react-icons/fa'

export default function InfoBoxes() {
    return (
        <div className='flex sm:flex-row sm:justify-center sm:w-auto sm:items-center flex-col gap-10'>
            <div className="flex flex-col gap-10">
                <div className="info-box">
                    <FaAddressBook className='text-[#00b386] text-4xl' />
                    <h3>Address</h3>
                    <p>Financify - Kandivali<br />Maharashtra, Mumbai-101</p>
                </div>
                <div className="info-box">
                    <FaPhone className='text-[#00b386] text-4xl' />
                    <h3>Call Us</h3>
                    <p>+91 9892565147</p>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="info-box">
                    <FaEnvelope className='text-[#00b386] text-4xl' />
                    <h3>Email Us</h3>
                    <p>financify-god@gmail.com</p>
                </div>
                <div className="info-box">
                    <FaClock className='text-[#00b386] text-4xl' />
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br />24/7</p>
                </div>
            </div>
        </div>
    )
}
