import './Qr.css'

const Qr = ({title}: { title: string }) => {
    return (
        <div className='qr_block'>
            <div className='qr_code'></div>
            <p className='title_OS'>{title}</p>
        </div>
    )
};

export default Qr;