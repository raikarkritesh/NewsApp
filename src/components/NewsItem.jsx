import React, { useEffect, useState } from "react";
import image from '../assets/news.jpg';

export const NewsItem = ({title, description, url, urlToImage}) => {
  return (
    <div className="card bg-dark text-light mb-3" style={{ width: '100%', height: '95%' }}>
      <img src={urlToImage ? urlToImage : image} style={{width: '100%', height: '12rem'}} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
        <div>
          <h5 className="card-title">{title.length > 80 ? title.slice(0,80) + '...' : title}</h5>
          <p className="card-text">{description && description.length > 50 ? description.slice(0,50) + '...' : description}</p>
        </div>
        <div className="mt-auto">
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};
