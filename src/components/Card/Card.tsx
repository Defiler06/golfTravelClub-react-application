import './Card.css';

const Card = ({title, linkA4, linkA5}: { title: string, linkA4: string, linkA5: string }) => {
    return (
        <div className='card'>
            <p className='title_card'>{title}</p>
            <div className='buttons'>
                <a className='button_pdf_format'
                   rel="noopener noreferrer"
                   href={linkA4}
                   target='_blank'>А4</a>
                <a className='button_pdf_format'
                   rel="noopener noreferrer"
                   href={linkA5}
                   target='_blank'>А5</a>
            </div>
        </div>
    )
};

export default Card;