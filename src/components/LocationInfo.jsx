const LocationInfo = ({ location }) => {
  return (
    <article className="location">
      <h2>{location?.name}</h2>
      <ul className="location__list">
        <li className="location__item">
          <span className="location__label">Tipe:</span>
          <span className="location__value">{location?.type}</span>
        </li>
        <li className="location__item">
          <span className="location__label">Dimension:</span>
          <span className="location__value">{location?.dimension || "unknownr"}</span>
        </li>
        <li className="location__item">
          <span className="location__label">Population:</span>
          <span className="location__value">{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
