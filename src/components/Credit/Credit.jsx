import PropTypes from 'prop-types'
const Credit = ({ credit }) => {
    const { title } = credit
    return (
        <div>
            <div className='bg-slate-200 p-2 rounded-xl'>
                <h4>Course Name:{title}</h4>
            </div>
        </div>
    );
};
Credit.propTypes = {
    credit: PropTypes.object
}
export default Credit;