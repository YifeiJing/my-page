import './w3style.css'
import TransHandle from './transHandle'
import GalleryItem from './galleryItem'
import yakiniku from './img/yakiniku.jpg'
import cook from './img/cook.jpg'
import antenna from './img/antenna.jpg'
import kyushu from './img/kyushu.jpg'
import flyppy from './img/flyppy.jpg'
import overwatch from './img/overwatch.jpg'
import prince from './img/princesstreet.jpg'
import youfang from './img/youfang.jpg'
import ttl from './img/ttl.jpg'
import scotland from './img/scottland.jpg'
import scotland1 from './img/scottland castle.jpg'
import scotland2 from './img/scottland castle 2.jpg'
import rdr2 from './img/rdr2.JPG'
import satis from './img/satisfactory.png'
import esp32 from './img/esp32.JPG'
import bike from './img/bike.jpg'
import euro from './img/euro.jpg'
import xidian from './img/xidian.jpg'
import beatles from './img/beatles.jpg'
import subsets from './img/subset.jpeg'

const Gallery = (props) => {
    return (
        <>
            <div className='w3-padding-16 w3-center'>
                <h2>Gallery</h2>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="My School in China." jp="中国の大学。" imgsrc={xidian}/>
            </div>           
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Life in Kyushu was amazing. I made some friends there. This is a photo made when we BBQ on the beach." jp="九州に住むとき、友達と一緒にBBQ。" imgsrc={kyushu}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Studied in Edinburgh. A photo of Prince's Street." jp="エディンバラに留学。プリンスストリートの写真。" imgsrc={prince}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Scotland." jp="Scotland" imgsrc={scotland}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Yakiniku is my favourate." jp="焼肉大好き。" imgsrc={yakiniku}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Because I spent many years living outside alone, I learnt to cook. Cooked Chinese cuisine for my Japanese friends." jp="長年留学生活で、料理を勉強しました。以前日本の友達と作った中国料理です。" imgsrc={cook}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="My favorate song." jp="よく聞く曲。" imgsrc={beatles}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="My favourate is OverWatch. But owing to compatible reasons, I cannot play it at present." jp="オーバーウォッチは一番好きなゲーム。でも、わからない原因で最近アップデートできなくなった。" imgsrc={overwatch}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Recently played Red Dead Redemption 2." jp="最近プレイした「レッド・デッド・リデンプション 2」" imgsrc={rdr2}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Satisfactory, a 3D game to build pipelines by yourself." jp="Satisfactory、自分でパイプラインを構築する 3D ゲーム。" imgsrc={satis}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="When I play Euro Truck 2." jp="Euro Truck 2をやるとき。" imgsrc={euro}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="My favorate slice of code." jp="好きなコード" imgsrc={subsets}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="I major in telecommunication. This is my first embedded system based on a LTE module called YouFang." jp="システム自作" imgsrc={youfang}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="A RTOS made on ATmega328p." jp="RTOS on ATmega328p" imgsrc={flyppy}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="A patched antenna made by myself." jp="アンテナ自作" imgsrc={antenna}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Signal after 5m wireless communication." jp="5m無線通信後の信号。" imgsrc={ttl}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Fortune server by ESP32." jp="一言サーバー。" imgsrc={esp32}/>
            </div>
            <div className='w3-padding-16'>
                <GalleryItem lang={props.lang} en="Traveled to Saitama." jp="埼玉にバイク旅。" imgsrc={bike}/>
            </div>
            
        </>
    )
}

export default Gallery;