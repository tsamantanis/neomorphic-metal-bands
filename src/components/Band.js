import Like from "./Like";
function Band(props) {
    return (
        <div className="col-12 col-md-4">
            <div className="card neomorphic--disabled">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>{props.name}</h3>
                            <p>Formed: {props.formed}</p>
                            <p>{props.origin}</p>
                            <p>Fans: {props.fans}</p>
                            {props.split !== "-" && (
                                <p className="mb-4 pb-1">
                                    {"Split: " + props.split}
                                </p>
                            )}
                            <ul className="ml-n1">
                                {props.style.split(",").map((style) => {
                                    return <li>{style}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                    {props.split === "-" && <Like />}
                </div>
            </div>
        </div>
    );
}

export default Band;
