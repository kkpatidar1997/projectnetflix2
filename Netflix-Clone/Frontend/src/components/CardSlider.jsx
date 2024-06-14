import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardSlider = ({ data, title }) => {
  return (
    <Container className='flex column'>
      <h1>{title}</h1>
      <div className='wrapper'>
        <div className='flex slider'>
          {data.map((movie) => (
            <Card movieData={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-left: 50px;
    }
  }
// `;
// import React from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';
// import styled from 'styled-components';

// const CardSlider = ({ data, title }) => {
//   // Check if data is available and has items
//   if (!data || data.length === 0) {
//     return null;
//   }

//   return (
//     <Container className='flex column'>
//       <h1>{title}</h1>
//       <div className='wrapper'>
//         <div className='flex slider'>
//           {data.map((movie) => (
//             <Card movieData={movie} key={movie.id} />
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// CardSlider.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       genre: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default CardSlider;

// const Container = styled.div`
//   gap: 1rem;
//   position: relative;
//   padding: 2rem 0;
//   h1 {
//     margin-left: 50px;
//     color: white; /* Ensure the title is visible */
//   }
//   .wrapper {
//     overflow-x: auto;
//     .slider {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 1rem;
//       margin-left: 50px;
//     }
//   }

//   @media (max-width: 768px) {
//     .slider {
//       margin-left: 20px;
//     }
//     h1 {
//       margin-left: 20px;
//     }
//   }

//   @media (max-width: 480px) {
//     .slider {
//       flex-direction: column;
//       margin-left: 10px;
//     }
//     h1 {
//       margin-left: 10px;
//       font-size: 1.5rem;
//     }
//   }
// `;
