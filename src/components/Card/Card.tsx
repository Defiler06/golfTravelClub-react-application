import './Card.css';

const Card = ({title, linkA4, linkA5}: {title: string, linkA4: string, linkA5: string}) => {
    return (
        <div className='card'>
            <p className='title_card'>{title}</p>
            <a className='button_pdf_format'
               href={linkA4}
               target='_blank'>Формат А4</a>
            <a className='button_pdf_format'
               href={linkA5}
               target='_blank'>Формат А5</a>
        </div>
    )
};

export default Card;