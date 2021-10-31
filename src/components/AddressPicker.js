// import useContext, useState, useEffect, useRef, useCallback
import { useContext, useState, useEffect, useRef, useCallback } from 'react';
// import Context
import Context from '../Context';
// import
import { OpenStreetMapProvider } from 'leaflet-geosearch';
// import custom components.
import withModal from './Modal';
import RequestRide from './RequestRide';

function AddressPicker(props) {
  const [isFrom, setIsFrom] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const { selectedFrom, setSelectedFrom, selectedTo, setSelectedTo } = useContext(Context);

  const provider = useRef();
  const searchRef = useRef();

  const { toggleModal } = props;

  useEffect(() => {
    initProvider();
  }, []);

  const shouldRequestDriver = useCallback( () => { 
    if (selectedFrom && selectedTo) {
      // show confirmation dialog to request a driver.
      toggleModal(true);
    }
  }, [selectedFrom, selectedTo, toggleModal]);

  useEffect(() => {
    if (selectedFrom && selectedTo) {
      // check a driver should be requested, or not.
      shouldRequestDriver();
    }
  }, [selectedFrom, selectedTo, shouldRequestDriver]);

  /**
   * handle input changed to get pick up location or destination.
   */
  const onInputChanged = (e) => { 
    const input = e.target.value;
    provider.current.search({ query: input }).then(results => {
      setSearchResults(() => results);
    });
  };

  /**
   * init provider.
   */
  const initProvider = () => {
    provider.current = new OpenStreetMapProvider({
      params: {
        'accept-language': 'en',
        countrycodes: "us"
      }
    });
  }

  /**
   * select location.
   * @param {*} selectedLocation 
   */
  const onLocationSelected = (selectedLocation) => {
    if (selectedLocation && selectedLocation.label && selectedLocation.x && selectedLocation.y) {
      if (isFrom) {
        // set pick up location.
        setSelectedFrom(() => selectedLocation);
        setIsFrom(() => false);
      } else {
        // set destination.
        setSelectedTo(() => selectedLocation);
        setIsFrom(() => true);
      }
      // clear search result.
      setSearchResults(() => []);
      // reset input value.
      searchRef.current.value = '';
    }
  };

  return (
    <div className="address">
      <div className="address__title">
        <div className="address__title-container">
          <p className="address__title-from" onClick={() => setIsFrom(true)}>{selectedFrom && selectedFrom.label ? selectedFrom.label : 'Pickup location ?'}</p>
          <p className="address__title-to" onClick={() => setIsFrom(false)}>{selectedTo && selectedTo.label ? selectedTo.label : 'Destination ?'}</p>
        </div>
      </div>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder={isFrom ? 'Add a pickup location' : 'Enter your destination'}
          onChange={onInputChanged}
          ref={searchRef}
        />
        <div className="search__result">
          {
            searchResults && searchResults.length !== 0 && searchResults.map((result, index) => (
              <div className="search__result-item" key={index} onClick={() => onLocationSelected(result)}>
                <div className="search__result-icon ">
                  
                </div>
                <p className="search__result-label">{result.label}</p>
              </div>  
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default withModal(RequestRide)(AddressPicker);