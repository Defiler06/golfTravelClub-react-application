import './Qr.css'

const Qr = ({title, className}: { title: string, className: string }) => {
    return (
        <div className='qr_block'>
            <div className={className}></div>
            <p className='title_OS'>{title}</p>
        </div>
    )
};

export default Qr;