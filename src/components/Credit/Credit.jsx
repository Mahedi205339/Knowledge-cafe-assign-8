import PropTypes from 'prop-types'
const Credit = ({ credit }) => {
    const { title } = credit
    return (
        <div>
            <div className='bg-slate-200 p-2 rounded-xl'>
                <li className='list-disc'>Course Name:{title}</li>
            </div>
        </div>
    );
};
Credit.propTypes = {
    credit: PropTypes.object
}
export default Credit;