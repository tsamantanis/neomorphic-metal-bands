function Band(props) {
    return (
        <div className="col-12 col-md-4">
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>{ props.name }</h3>
                            <p>Formed: { props.formed }</p>
                            <p>{ props.origin }</p>
                            <p>Fans: { props.fans }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Band;
