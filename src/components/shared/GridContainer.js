const GridContainer = ({ children, fullwidth }) => {
  return (
    <div className={`${fullwidth ? 'full-grid' : 'grid-container '}`}>
      {children}
    </div>
  );
};

export default GridContainer;
