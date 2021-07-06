import Particles from 'react-particles-js';
import configJson from '../../Assets/particleJSConfig.json';
import "../../Style/Particle.css";

export function ParticlesBackground(auth) {

    return (
        <div className="particlesBackground">
            <Particles id={'particles-js'}
                params={configJson}/>
        </div>
    );
}

