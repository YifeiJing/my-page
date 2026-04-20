const Intro = (props) => {
    return (
        (
            <>
            <div className='w3-padding-16 w3-center'>
                <h2>Introduction</h2>
            </div>
                {props.lang === 0 ? 
                <>
                <p> Hi, I am jing from China. This is my sixth year in Japan. I came to Kyushu University in Fukuoka as a Master's degree student. Then, I graduated and moved to Tokyo to work as an engineer.
                </p>
                <p>
                    I like listening to music, watching animes, programming, playing games and driving.
                    
                    I play a lot of games, as I have made a gaming PC by myself.
                </p>
                <p>
                    Actually, anything related to computer engineering is of my interests: graphics, vision, database, baremetal, machine learning, etc. I would like to make things from scratch to make me fully undertand the things lurking beneath the hood.
                    As Richard Feynman has said: "If I cannot create, I do not understand", I best way to learn is to create it. This is the engineering culture I have believed in my life.
                </p>
                
                </>
                :
                <>
                <p> こんにちは、中国から来たジンです。日本に来て6年目。最初は九州大学に修士課程として入学した。そして、卒業し、エンジニアとして働くために東京に引っ越してきた。
                    </p>
                <p>
                    音楽を聴くこと、アニメ、プログラミング、ゲーム、とドライブが好きです。
                    
                    ゲーミングPCを自作したのでよくゲームをしている。
                    </p>
                <p>
                    実は、グラフィックス、ビジョン、データベース、ベアメタル、機械学習など、コンピュータエンジニアリングに関わるものなら何でも興味がある。内部に潜むものを徹底的に理解するために、ゼロから何かを作りたい。
                    リチャード・ファインマンが言ったように、「創造できないなら、理解できない」、学ぶための最良の方法は、それを創造することだ。これが信じてきたエンジニアリング文化です。
                    </p>
               
                </>}
            </>
        )
    )
}

export default Intro;