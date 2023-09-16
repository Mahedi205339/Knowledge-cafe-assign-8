import PropTypes from 'prop-types'
import Credit from '../Credit/Credit';
const CreditData = ({ creditData }) => {
    return (
        <div className="md:w-1/4 md:ml-5">
            <div className='text-center font-bold'>
                <h1 className='text-[#2F80ED]'>Credit Hour Remaining {}</h1>
            </div>
            
            {
                creditData.map(credit => <Credit credit={credit} key={credit.id}></Credit>)
            }
            <div className='font-semibold'>
                <h5>Total Credit Hour :{ }</h5>
                <h4>Total Price :</h4>
            </div>
        </div>
    );
};
CreditData.propTypes = {
    creditData: PropTypes.array
}

export default CreditData;