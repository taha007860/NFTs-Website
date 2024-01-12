import React, { useState } from "react";
import "../styles/NFTDetailsPage.css";
import thumbs from "../assets/images/thumbs.png";
import heart from "../assets/images/love.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faShare } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
const NFTDetailsPage = () => {
  const { title, imageSrc, contentType, videoSrc, category, ownerName, creator, artist, likes, profile, price, bid } = useParams();
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setTermsChecked(!termsChecked);
  };

  return (
    <div className="nft-details-container">
      <div className={contentType === "image" ? "nft-image-container" : "nft-video-controller"}>
      {contentType === 'video' ? (
          // If contentType is video, render the video tag
          <video controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // If contentType is image, render the image tag
          <img src={decodeURIComponent(imageSrc)} alt="NFT" />
        )}
        <ul class="items">
        <li id="description">Description</li>
        <li>Info</li>
        <li>Owners</li>
        <li>Activity</li>
      </ul>
      <hr className="colored-hr"/>
      </div>
      <div className="nft-info-container">
        <div className="nft-card-detail">
          <h2>{title}</h2>
          <button className="category-detail" id="categ">
            {category}
          </button>
          <div className="profile-section">
            <div className="profile">
              <img src={profile} alt="Owner" />
              <span>Owner</span>
              <br />
              <span id="name1">{ownerName}</span>
            </div>
            <div className="profile">
              <img id="creator" src={profile} alt="Creator" />
              <span id="spanCreator">Creator</span>
              <br />
              <span id="name2">{creator}</span>
            </div>
            <div className="profile">
              <img id="artist" src={profile} alt="Artist" />
              <span id="spanArtist">Artist</span>
              <br />
              <span id="name3">{artist}</span>
            </div>
          </div>
          <div className="interaction-icons">
            <span>
              <img src={thumbs} alt="thumbs" width="20" height="20" />{" "}
              <span>{likes}</span>
            </span>
            <span>
              <img src={heart} alt="thumbs" width="20" height="20" />
            </span>
            <span id="share">
              <FontAwesomeIcon icon={faShare} id="icon" /> Share
            </span>
          </div>
          <div class="prices1">
            <p>Floor Price </p>
            <p id="scndP">Highest Bid </p>
          </div>
          <div class="prices2">
            <p className="price-detail">
              Price <span>$ {parseFloat(price).toFixed(2)} </span>
              <FontAwesomeIcon icon={faAngleDown} id="angle-down" />
            </p>
            <p className="price-detail" id="secondP">
              Price <span>$ {parseFloat(bid).toFixed(2)} </span>
              <FontAwesomeIcon icon={faAngleDown} id="angle-down-details" />
            </p>
          </div>
          <label>
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>I acknowledge that I have read
            and <span>accepted the terms and conditions</span>
          </label>
          <button id="buy">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NFTDetailsPage;