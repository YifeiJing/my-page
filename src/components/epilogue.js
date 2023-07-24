import { useState } from 'react';

const Epilogue = (props) => {
    const [_display, setDisplay] = useState('none');

    const onButtonClicked = () => {
        if (_display === 'none') {
            setDisplay('block');
        }
        else setDisplay('none')
    }
    return (
        (
            <>
            <div className='w3-padding-16 w3-center'>
                <h2>Epilogue</h2>
            </div>
                {props.lang === 0 ? 
                <>
                <p> 
                    Thanks for reading to the End.
                </p>
                <button className="w3-collapsible" onClick={onButtonClicked}>Read {_display === 'none' ? "More" : "Less"}</button>
                <div className="w3-collapsible-content" style={{display:_display}}>
                <p>
                    Based on interests, I can make friends as many as possible. 
                    But all those relationships did not last long, which had confused me before.
                    </p>
                <p>
                    Recently, I read some explanations of the book "Republic" from Xiang Luo. 
                    There are some sections about how Plato and Socrates think about Love and relationship. 
                    It is normal that people firstly get attracted by hobbies and sexual desires.
                    Because we should meet the most fundamental needs then there is space for higher-level needs.
                    The basic needs definitely have meaning. I feel happy when I eat food or I have a good sleep.
                    The thing is that I cannot be addicted to them. 
                    There are higher needs persued by souls. I feel highly satisfied when I understand a theory or complete a project through hard work.
                    Because they indicate human dignity and nobility of soul. 
                    However, it is not that the sexual love is worse than love of soul. 
                    When we persue satisfaction of soul, it is likely that we feel appreciated of being pleased physically.
                    So there is a kind of balance.
                    </p>
                <p>
                    That is to say the relationship is like going upstairs. We get attracted by outlookings or hobbies first.
                    Then we gradually get to know personalities and to get attracted by heart, knowledge, wisdom and soul.
                    </p>
                <p>
                    Xiang Luo's perspective suggests that many relationships tend to stall at the initial stage because individuals often fail to discover shared values in each other's personalities. As a result, they may quickly become disinterested in fulfilling only basic needs. The process of agreeing on common values is not explicitly answered by Luo. He acknowledges that people are inherently different, and finding someone who perfectly satisfies all requirements can be challenging.

                    However, Luo emphasizes the potential for personal growth and change. When problems arise in a relationship, sincerity and courage play crucial roles in sustaining the bond and overcoming challenges. By being honest and brave in addressing issues, individuals can foster understanding, compromise, and growth within the relationship.

                    In essence, while it may be challenging to find someone who perfectly aligns with all our values, the commitment to open communication and personal development can contribute to the longevity and fulfillment of a relationship.</p>
                <p>
                    How can I do? I do not know. But I hope I can find someone to seek the answer with me.
                </p>
                </div>
                </>
                :
                <>
                <p> 
                    最後まで読んでくれてありがとう！
                </p>
                <button className="w3-collapsible" onClick={onButtonClicked}>Read {_display === 'none' ? "More" : "Less"}</button>
                <div className="w3-collapsible-content" style={{display:_display}}>
                <p>
                    興味に基づいて、できるだけ多くの友達を作ることができます。
                    しかし、それらの関係は長続きせず、以前は私を混乱させていました。
                    </p>
                <p>
                    最近、私はシャン・ルオによる「国家」の解説を読みました。
                    プラトンとソクラテスが愛と関係について考えるいくつかのセクションがあります。
                    最初に、人々は趣味や性的欲望によって引き寄せられるのは普通のことです。
                    なぜなら、まず最も根本的なニーズを満たさなければならないからです。そしてそれが高次のニーズにスペースを提供します。
                    基本的なニーズには確かに意味があります。食事をしたり、よく眠ると幸せを感じます。
                    ただし、それらに中毒になることはできません。
                    魂が追求するより高いニーズがあります。理論を理解したり、努力を通じてプロジェクトを完成させたとき、私は非常に満足感を感じます。
                    なぜなら、それらは人間の尊厳と魂の高潔さを示しているからです。
                    ただし、性的な愛が魂の愛より劣っているわけではありません。
                    魂の満足を追求すると、身体的に喜ばれることに感謝の気持ちを持つことがあります。
                    だからこそ、ある種のバランスが存在するのです。
                    </p>
                <p>
                    そうですね、関係性は階段を上るようなものです。まず外見や趣味に引かれます。
                    その後、徐々に相手の個性を知り、心や知識、知恵、魂に惹かれるようになります。
                </p>
                <p>
                    シャン・ルオの見解によれば、多くの関係は初期段階で停滞する傾向があります。なぜなら、個々の人々がお互いの個性に共通の価値観を見つけることができず、結果として、基本的なニーズのみを満たすことに興味を失うことがあるからです。共通の価値観を合意するプロセスについては、ルオは明確な答えを提供していません。彼は人々が本質的に異なる存在であると認識し、全ての要件を完璧に満たす相手を見つけることは難しいと認めています。

                    ただし、ルオは個人の成長と変化の可能性を強調しています。関係に問題が生じた場合、真摯さと勇気が絆を維持し、困難を乗り越える上で重要な役割を果たすと考えています。問題に対して率直で勇敢に向き合うことで、個人は関係内で理解と妥協、成長を促進できるというのです。

                    要するに、全ての価値観と完全に一致する相手を見つけることは難しいかもしれませんが、オープンなコミュニケーションと個人の成長へのコミットメントは、関係の持続と充実に貢献することができると言えます。
                
                </p>
                </div>
                </>}
            </>
        )
    )
}

export default Epilogue;