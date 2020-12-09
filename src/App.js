import { Fragment } from 'react'
import Heading from './components/Heading';
import MetalMeta from './components/MetalMeta';
import Band from './components/Band';

import data from './metal.json';

function App() {
    return (
        <Fragment>
            <Heading />
            <MetalMeta />
            <div className="row">
                { data.map((band) => {
                    return (
                        <Band
                            key={ band.band_name }
                            name={ band.band_name }
                            formed={ band.formed }
                            origin={ band.origin }
                            fans={ band.fans }
                            // split={ band.split }
                            // style={ band.style }
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}

export default App;
