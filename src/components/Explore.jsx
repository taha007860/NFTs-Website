import React, { useState, useEffect } from 'react';
import NFTCard from './NFTCard';
import "../styles/Explore.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const ExploreNFTsPage = () => {
  const [nfts, setNfts] = useState([]);
  const [displayedNftIndex, setDisplayedNftIndex] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await import('../assets/JSON/nfts.json');
        setNfts(response.default); 
      } catch (error) {
        console.error('Error fetching NFT data:', error);
      }
    };

    fetchData();
  }, []);

  const displayedNfts = nfts.slice(0, displayedNftIndex);

  const handleViewMore = () => {
    // Incremented the index to show the next three NFTs
    setDisplayedNftIndex((prevIndex) => prevIndex + 3);
  };

  return (
    <div className="explore-nfts-page">
      <h1>Explore NFTs</h1>
      <div className="nft-grid">
        {displayedNfts.map((nft, index) => (
          <React.Fragment key={index}>
            {/* Rendered the NFTCard based on the contentType */}
            {nft.contentType === "image" && (
              <NFTCard {...nft} contentType="image" />
            )}
            {nft.contentType === "video" && (
              <NFTCard {...nft} contentType="video" />
            )}
          </React.Fragment>
        ))}
      </div>
      {displayedNftIndex < nfts.length && (
        <button id="view" onClick={handleViewMore}>
          View More <FontAwesomeIcon className="circle" icon={faCircle} />{' '}
          <FontAwesomeIcon className="circle" icon={faCircle} />
        </button>
      )}
    </div>
  );
};

export default ExploreNFTsPage;
