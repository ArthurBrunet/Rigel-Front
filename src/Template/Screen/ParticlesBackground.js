import Particles from 'react-particles-js';
import configJson from '../../Assets/particleJSConfig.json';

export function ParticlesBackground() {
    return (
        <div className="particlesBackground">
            <Particles
                params={configJson}/>
        </div>
    );
}

