const Intro = (props) => {
    return (
        (
            <>
            <div className='w3-padding-16 w3-center'>
                <h2>Introduction</h2>
            </div>
                {props.lang === 0 ? 
                <>
                <p> Hi, I am jing from China. This is my third year in Japan. I came to Fukuoka as a Master's degree student. There, I had part-time job in 711. The owner taught me about Janpanese.
                    I worked there for 2 years. Then, I graduated and moved to Tokyo in this April to work as an engineer.
                </p>
                <p>
                    I like listening to music, watching animes, programming, playing games and driving.
                    My favourate band is the Beatles. There are also so many others: Led Zeppelin, Simon & Garfunkel, etc. My favourate song is "Still my guitar gently weeps". Emm, I am going to learn Guitar.
                    I also read books, I read Haruki Murakami a lot. I am reading Carver recently.

                    I play a lot of games, as I have made a gaming PC by myself.
                </p>
                <p>
                    Actually, anything related to computer engineering is of my interests: graphics, vision, database, baremetal, machine learning, etc. I would like to make things from scratch to make me fully undertand the things lurking beneath the hood.
                    As Richard Feynman has said: "If I cannot create, I do not understand", I best way to learn is to create it. This is the engineering culture I have believed in my life.
                </p>
                <p>    
                    As you may have guessed, I am introvert and I tend to listen.
                    Most of the time, this personality does not make life easy. I cannot make many friends so most of the time I am alone.
                    I think I need to have a hobby to go out to meet people, so I started motorcycle last year. 
                    I have a motorcycle, which is of 900cc. I go to travel on weekends.
                </p>
                <p>
                    On the other way, I do not think I have stuck on any specific hobby for long. That is to say people do change, and we develop new interests.
                    I am still yound, and I would like to try anything new to me.
                    
                </p>
                </>
                :
                <>
                <p> こんにちは、中国から来たジンです。日本に来て3年目。最初、修士課程の学生として福岡に来た。そこで711でアルバイトをした。オーナーさんが日本語を教えてくれた。
                    2年間働いた。そして、今年4月に卒業し、エンジニアとして働くために東京に引っ越してきた。
                    </p>
                <p>
                    音楽を聴くこと、アニメ、プログラミング、ゲーム、とドライブが好きです。
                    好きなバンドはビートルズ。レッド・ツェッペリン、サイモン＆ガーファンクルなど、他にもたくさんある。最近お気に入りの曲は「Still my guitar gently weeps」。えー、ギターを勉強したい。
                    本も読む、村上春樹もよく読む。最近はカーヴァーを読んでいる。
                    ゲーミングPCを自作したのでよくゲームをしている。
                    </p>
                <p>
                    実は、グラフィックス、ビジョン、データベース、ベアメタル、機械学習など、コンピュータエンジニアリングに関わるものなら何でも興味がある。内部に潜むものを徹底的に理解するために、ゼロから何かを作りたい。
                    リチャード・ファインマンが言ったように、「創造できないなら、理解できない」、学ぶための最良の方法は、それを創造することだ。これが信じてきたエンジニアリング文化です。
                    </p>
                <p>   
                    おそらくお察しの通り、私は内向的な性格であり、聞くことを好む傾向があります。
                    大抵の場合、この性格は生活を容易にはしてくれません。多くの友達を作ることができないので、ほとんどの時間を一人で過ごしています。 
                    人と会いに行くには趣味が必要だと思って、去年からバイクを始めた。
                    現在900ccのバイクを持っています。週末に旅行に行くことが多い。
                </p>
                <p>
                    逆に、自分は特定の趣味を長く続けたということはないと思う。つまり、人は変わり、新たな興味が生まれるのです。
                    まだ若いので、何か新しいことに挑戦していきたいと思っています。
                </p>
                </>}
            </>
        )
    )
}

export default Intro;