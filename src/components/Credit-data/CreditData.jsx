import PropTypes from 'prop-types'
import Credit from '../Credit/Credit';
const CreditData = ({ creditData ,readingHour,remaining,totalPrice}) => {
    return (
        <div className="md:w-1/4 md:ml-5 lg:ml-10 text-left">
            <div className=' font-bold'>
                <h1 className='text-[#2F80ED]'>Credit Hour Remaining :{remaining} hr
                </h1>
                
            </div>
            
            {
                creditData.map(credit => <Credit credit={credit} key={credit.id}></Credit>)
            }
            <div className='font-semibold mt-3 md:mt-6 lg:mt-10'>
                <h5>Total Credit Hour :{ readingHour} hr</h5>
                <h4>Total Price :${totalPrice}</h4>
            </div>
        </div>
    );
};
CreditData.propTypes = {
    creditData: PropTypes.array,
    readingHour:PropTypes.number,
    totalPrice:PropTypes.number,
    remaining:PropTypes.number
}

export default CreditData;