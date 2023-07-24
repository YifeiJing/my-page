import logo from './logo.svg';
import './components/w3style.css'
import Legends from './components/legends'
import './App.css';

function App() {
  return (
    <div className='w3-content'>
		  <div className='w3-black w3-container' style={{minHeight:'800px'}}>
      <Legends/>
      </div>
     
      <footer class="w3-container w3-black w3-padding-top-32">
        <p>Powered by <span className='w3-text-cyan'>React</span>, <span className='w3-text-teal'>Github Page</span>, and <span className='w3-text-orange'>AWS S3</span></p>
        <p>Created by <a href={"https://yifeijing.github.io/"} className='w3-text-purple'>rvalue</a> --- yifei.j@ik.me</p>
      </footer>
    </div>
  );
}

export default App;
