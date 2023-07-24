import './w3style.css'
const Profile = (props) => {
    return (
        <>
        {props.lang === 0 ? 
            <table className='w3-table'>
                <tbody>
                <tr>
                    <th>Name</th>
                    <td>Jing</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>China</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>Male</td>
                </tr>
                <tr>
                    <th>Birthday</th>
                    <td>1998/02/28</td>
                </tr>
                <tr>
                    <th>Years in Japan</th>
                    <td>2.5</td>
                </tr>
                <tr>
                    <th>Languages</th>
                    <td>Chinese, English, Japanese</td>
                </tr>
                <tr>
                    <th>Career</th>
                    <td>Infrastructure Engineer</td>
                </tr>
                <tr>
                    <th>Years of Employment</th>
                    <td>0.5</td>
                </tr>
                <tr>
                    <th>Home</th>
                    <td>Setagaya, Tokyo</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>Setagaya, Tokyo</td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>Music, Books, Animes, Movies, Programming, Working, Riding</td>
                </tr>
                </tbody>
            </table>
            :
            <table className='w3-table'>
                <tbody>
                <tr>
                    <th>名前</th>
                    <td>ジン</td>
                </tr>
                <tr>
                    <th>出身</th>
                    <td>中国</td>
                </tr>
                <tr>
                    <th>性別</th>
                    <td>男</td>
                </tr>
                <tr>
                    <th>誕生日</th>
                    <td>1998年02月28日</td>
                </tr>
                <tr>
                    <th>日本滞在年数</th>
                    <td>2.5</td>
                </tr>
                <tr>
                    <th>言語</th>
                    <td>中国語, 英語, 日本語</td>
                </tr>
                <tr>
                    <th>職業</th>
                    <td>インフラ エンジニア</td>
                </tr>
                <tr>
                    <th>勤務年数</th>
                    <td>0.5</td>
                </tr>
                <tr>
                    <th>在住</th>
                    <td>東京世田谷区</td>
                </tr>
                <tr>
                    <th>勤務地</th>
                    <td>東京世田谷区</td>
                </tr>
                <tr>
                    <th>趣味</th>
                    <td>音楽, 本, アニメ, 映画, プログラミング, 仕事, ライディング</td>
                </tr>
                </tbody>
            </table>
            }
            {/* <div className='w3-code'>
                <span className='w3-codespan'>int main()</span>
            </div> */}
        </>
    )
}

export default Profile;