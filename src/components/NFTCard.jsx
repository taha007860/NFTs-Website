import React from 'react';
import "../styles/NFTCardVideo.css";
import thumbs from '../assets/images/thumbs.png'
import heart from '../assets/images/love.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const NFTCard = ({ category, title, contentType, videoSrc, imageSrc1, ownerName, creator, artist, likes, profile, price, bid }) => {
  const imageSrc = "/assets/image1-Qn9QN7A4.jpg";
  const videoSrcPath = `/assets/videos/${videoSrc}`;
  const profilePath = `/assets/images/${profile}`;
  const linkTo = `/nft/${encodeURIComponent(title)}/${encodeURIComponent(imageSrc)}/${encodeURIComponent(videoSrcPath)}/${contentType}/${category}/${ownerName}/${creator}/${artist}/${likes}/${encodeURIComponent(profilePath)}/${price}/${bid}`;
  return (
    <Link to={linkTo} style={{textDecoration: 'none'}}>
    <div className="nft-card">
      <div className="card-content">
      {contentType === 'video' ? (
          <div className="video-container">
            <video controls>
              <source src={new URL(`../assets/videos/${videoSrc}`, import.meta.url).toString()} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="image-container">
            <img id="nft-image" src={new URL(`../assets/images/${imageSrc1}`, import.meta.url).toString()} alt="Image" />
          </div>
        )}
      </div>
      <div className={`card-footer ${contentType === 'image' ? 'image-footer-style' : ''}`}>
      <span id={`${contentType === 'image' ? 'spanThumb' : 'span-video'}`}><img src={thumbs} className="icon-nft" /> <span id="number">{likes}</span></span>
      <img src={heart} className={`icon-nft heart ${contentType === 'image' ? 'heart-image' : 'heart-video'}`} />
        <button className={`category ${contentType === 'image' ? 'category-image' : 'category-video'}`}>{category}</button>
        <h3 className={`${contentType === 'image' ? 'h3-image' : 'h3-video'}`}>{title}</h3>
        <div className={`creator-info ${contentType === 'image' ? 'info-image' : 'info-video'}`}>
          <img src={new URL(`../assets/images/${profile}`, import.meta.url).toString()} alt="Profile" />
          <p id="owner">Owner</p>
          <span>{ownerName}</span>
        </div>
        <p className={`price ${contentType === 'video' ? 'price-footer-style' : 'price-image'}`}>Price <span>$ {parseFloat(price).toFixed(2)} </span><FontAwesomeIcon icon={faAngleDown} id="angle-down"/></p>
        <button className={`buy-now ${contentType === 'video' ? 'buy-footer-style' : 'buy-image'}`}>Buy Now</button>
      </div>
    </div>
    </Link>
  );
};

export default NFTCard;


