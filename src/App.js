import Heading from './components/Heading';
import MetalMeta from './components/MetalMeta';
import Band from './components/Band';

import data from './metal.json';

function App() {
    return (
        <div className="container">
            <Heading />
            <MetalMeta />
            <div className="row mt-5">
                { data.map((band) => {
                    return (
                        <Band
                            key={ band.band_name }
                            name={ band.band_name }
                            formed={ band.formed }
                            origin={ band.origin }
                            fans={ band.fans }
                            split={ band.split }
                            // style={ band.style }
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
