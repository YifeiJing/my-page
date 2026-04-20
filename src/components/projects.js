const Projects = (props) => {
    const projects = [
        {
            title: "Neural Network from Scratch",
            titleJp: "ニューラルネットワーク",
            description: "A neural network implementation from scratch optimized by Particle Swarm Optimization (PSO)",
            descriptionJp: "粒子群最適化(PSO)で最適化されたニューラルネットワークの実装",
            url: "https://github.com/YifeiJing/MyNeuralNetwork"
        },
        {
            title: "Multitasking RTOS",
            titleJp: "マルチタスキング RTOS",
            description: "A real-time operating system with multitasking capabilities",
            descriptionJp: "マルチタスキング機能を備えたリアルタイムオペレーティングシステム",
            url: "https://github.com/YifeiJing/B31DD-Mini-project"
        }
    ];

    return (
        <div className='w3-padding-16'>
            <div className='w3-padding-16 w3-center'>
                <h2>{props.lang === 0 ? "Projects" : "プロジェクト"}</h2>
            </div>
            <ul style={{listStyle: 'none', padding: 0}}>
                {projects.map((project, index) => (
                    <li key={index} style={{marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #333'}}>
                        <h3 style={{color: '#00BCD4', marginTop: 0, marginBottom: '8px'}}>
                            {props.lang === 0 ? project.title : project.titleJp}
                        </h3>
                        <p style={{color: '#ccc', marginBottom: '12px'}}>
                            {props.lang === 0 ? project.description : project.descriptionJp}
                        </p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className='w3-button w3-teal' style={{padding: '6px 12px', fontSize: '14px'}}>
                            {props.lang === 0 ? "View on GitHub" : "GitHubで見る"}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
