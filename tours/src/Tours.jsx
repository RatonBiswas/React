/* eslint-disable react/prop-types */

import Tour from "./Tour";
// eslint-disable-next-line react/prop-types
const Tours = ({ tours ,removeTours}) => {
  return (
    <section >
      <div className="title">
        <h2>Ours Tour</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTours}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
