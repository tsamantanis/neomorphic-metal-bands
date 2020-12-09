import data from '../metal.json';

function MetalMeta() {
    return (
        <div>
            <h3>Metal Bands 🤘</h3>
            <h3>Band count: { data.length }</h3>
        </div>
    );
}

export default MetalMeta;
