import TransHandle from './transHandle'
import './w3style.css'
const GalleryItem = (props) => {
    return (
        <>
            <div className='w3-padding-small'>
                <TransHandle className="w3-border" lang={props.lang} en={props.en} jp={props.jp}/>
                <div className='w3-row'>
                    <img className='w3-image' src={props.imgsrc} style={{width:"100%"}}/>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;