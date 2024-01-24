import React, { Component } from "react";

const Newsitem=(props)=>  {
  
    let { title, description, Url , newsUrl , author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style= {{display :"flex", position:"absolute",justifyContent: "flex-end",right:"0"}}>
        <span className=" badge rounded-pill bg-danger " > 
          {source}</span>
          </div>
         
          <img src={!Url?"https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60":Url} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>

            <a href={newsUrl} target='_blank' rel='noopener noreferrer' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default Newsitem;
