import React from "react";

const SecondsCounter = (props) =>{

    return (<>
        <>
<h2 className="m-4">Second Counter</h2>
<div className="container mt-5 bg-secondary">
  <div className="row d-flex justify-content-center">
    <div className="col-1 text-center">
      <h1>
        <span className="badge text-bg-success me-5"><i className="fa fa-clock"></i></span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.tensOfHoursCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.hoursCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge text-bg-success">:</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.tensOfMinutesCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.minutesCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge text-bg-success">:</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary ">{props.tensOfSecondsCount}</span>
      </h1>
    </div>
    <div className="col-1 text-center">
      <h1>
        <span className="badge bg-secondary">{props.secondsCount}</span>
      </h1>
    </div>
  </div>
</div>

      </>


        </>)
        
    

}

export default SecondsCounter;