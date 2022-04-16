import React from "react";

const Searchbar = () => {
    return(
        <>

                    <div className="col-11">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-outline-primary hero-btn">Search</button>
                    </div>

        </>
    )
}
export default Searchbar;