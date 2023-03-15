import React from "react";

const SecondsCounter = (props) =>{

    return (<>
        Soy el componente SecondsCounter
        <div className="constainer d-flex">
            <div className="row">
                <div className="clo-6">

                </div>
                <div className="clo-6">{props.seconds}

                </div>

            </div>

        </div>
        </>)
        
    

}

export default SecondsCounter;