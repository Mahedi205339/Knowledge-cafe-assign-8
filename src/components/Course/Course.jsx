import PropTypes from 'prop-types'
import {FaBook ,FaDollarSign } from "react-icons/fa";
const Course = ({ course ,handleAddToCreditData}) => {
    const { title, cover, description, price, credit } = course
    return (
        <div className='w-[300px]'>
            <img className='w-[300px]' src={cover} alt={`cover picture of the title ${title}`} />
            <h2 className='text-xl font-semibold my-3'>{title}</h2>
            <p className=' text-sm text-gray-500'>{description}</p>
            <div className='flex justify-between items-center my-4 text-gray-500'>
                <p className='flex gap-2 items-center'><FaDollarSign></FaDollarSign> Price :${price}</p>
                <p className='flex gap-2 items-center'><FaBook ></FaBook >  Credit :{credit}hr</p>
            </div>
            <button onClick={()=>handleAddToCreditData(course)} className='w-[300px] text-white bg-[#2F80ED] h-10 rounded-lg hover:bg-white hover:text-[#2F80ED] font-semibold'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCreditData:PropTypes.func
}
export default Course;
