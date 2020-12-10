import { useState } from "react";
import Band from "./Band";
import data from "../metal.json";

function Bands() {
    const [search, setSearch] = useState("");

    let filteredData = data.filter((band) => {
        const searchable =
            band.band_name +
            " " +
            band.formed +
            " " +
            band.origin +
            " " +
            band.fans +
            " " +
            band.style;
        const searchTerms = search.toLowerCase().trim().split(" ");
        return searchTerms.every((term) => {
            return searchable.toLowerCase().includes(term);
        });
    });
    return (
        <>
            <div className="row mt-5 justify-content-center align-items-center">
                <div className="col-12 col-md-4">
                    <input
                        className="neomorphic w-100 pt-2 pb-2 pl-3"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a band"
                    />
                </div>
            </div>
            <div className="row mt-5">
                {filteredData.map((band) => {
                    return (
                        <Band
                            key={band.band_name}
                            name={band.band_name}
                            formed={band.formed}
                            origin={band.origin}
                            fans={band.fans.toLocaleString("en")}
                            split={band.split}
                            style={band.style}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Bands;
