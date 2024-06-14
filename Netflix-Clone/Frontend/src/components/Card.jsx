// import React, { useState, useMemo, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';
// import { IoPlayCircleSharp } from "react-icons/io5";
// import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
// import { BsCheck } from "react-icons/bs";
// import { AiOutlinePlus } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
// import { onAuthStateChanged } from 'firebase/auth';
// import { firebaseAuth } from '../utils/firebase-config';
// import { useDispatch } from 'react-redux';
// import { removeMovieFromLiked } from '../store';

// const Card = ({ movieData, isLiked = false }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState(undefined);
//   const dispatch = useDispatch();
//   const [addedToList, setAddedToList] = useState(false);
//   const [alreadyExists, setAlreadyExists] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) setEmail(currentUser.email);
//       else navigate("/login");
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, [navigate]);

//   const addToList = async (e) => {
//     e.stopPropagation();
//     try {
//       const response = await axios.post("http://localhost:5000/api/user/add", {
//         email,
//         data: movieData,
//       });
//       if (response.data.msg === 'Movie already added to the list.') {
//         setAlreadyExists(true);
//       } else {
//         setAddedToList(true);
//       }
//     } catch (error) {
//       console.error("Error adding to list:", error);
//     }
//   };

//   useEffect(() => {
//     if (addedToList || alreadyExists) {
//       const timeout = setTimeout(() => {
//         setAddedToList(false);
//         setAlreadyExists(false);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [addedToList, alreadyExists]);

//   const movieNameIdArray = useMemo(() => [
//     { name: 'Extraction 2', id: 'Y274jZs5s7s' },
//     { name: 'Movie 2', id: '1234567890' },
//     // Add more movie names and IDs as needed
//   ], []);

//   const getVideoId = (name) => {
//     const movie = movieNameIdArray.find((movie) => movie.name === name);
//     return movie ? movie.id : '';
//   };

//   const handlePlayButtonClick = (e) => {
//     e.stopPropagation();
//     const videoId = getVideoId(movieData.name);
//     navigate('/player', { state: { videoId } });
//   };

//   return (
//     <Container onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//       <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='movie' />
//       {isHovered && (
//         <div className='hover'>
//           <div className='image-video-container'>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
//               alt='movie'
//               onClick={handlePlayButtonClick}
//             />
//           </div>
//           <div className='info-container flex column'>
//             <h3 className='name' onClick={handlePlayButtonClick}>{movieData.name}</h3>
//             <div className='icons flex j-between'>
//               <div className='controls flex'>
//                 <IoPlayCircleSharp title='play' onClick={handlePlayButtonClick} />
//                 <RiThumbUpFill title='Like' />
//                 <RiThumbDownFill title='Dislike' />
//                 {isLiked ? (
//                   <BsCheck
//                     title='Remove From List'
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       dispatch(removeMovieFromLiked({ movieId: movieData.id, email }));
//                     }}
//                   />
//                 ) : (
//                   <AiOutlinePlus title='Add to my list' onClick={addToList} />
//                 )}
//               </div>
//               <div className='info'>
//                 <BiChevronDown title='More Info' />
//               </div>
//               <div className="genres flex">
//                 <ul className="flex">
//                   {movieData.genres?.map((genre, index) => (
//                     <li key={index}>{genre}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {addedToList && <p className="success">Added to My List</p>}
//       {alreadyExists && <p className="error">Already in My List</p>}
//     </Container>
//   );
// };

// export default Card;

// const Container = styled.div`
//   max-width: 230px;
//   width: 230px;
//   height: 100%;
//   cursor: pointer;
//   position: relative;
//   img {
//     border-radius: 0.2rem;
//     width: 100%;
//     height: 100%;
//     z-index: 10;
//   }
//   .hover {
//     z-index: 99;
//     height: max-content;
//     width: 20rem;
//     position: absolute;
//     top: -18vh;
//     left: 0;
//     border-radius: 0.3rem;
//     box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
//     background-color: #181818;
//     transition: 0.3s ease-in-out;
//     .image-video-container {
//       position: relative;
//       height: 145px;
//       img {
//         width: 100%;
//         height: 140px;
//         object-fit: cover;
//         border-radius: 0.3rem;
//         top: 0;
//         z-index: 4;
//         position: absolute;
//       }
//     }
//     .info-container {
//       padding: 1rem;
//       gap: 0.5rem;
//     }
//     .icons {
//       .controls {
//         display: flex;
//         gap: 1rem;
//       }
//       svg {
//         font-size: 2rem;
//         cursor: pointer;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: #b8b8b8;
//         }
//       }
//     }
//     .genres {
//       ul {
//         gap: 1rem;
//         li {
//           padding-right: 0.7rem;
//           &:first-of-type {
//             list-style-type: none;
//           }
//         }
//       }
//     }
//   }
//   .success {
//     color: green;
//     font-size: 1rem;
//     margin-top: 0.5rem;
//   }
//   .error {
//     color: red;
//     font-size: 1rem;
//     margin-top: 0.5rem;
//   }
// `;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { IoPlayCircleSharp } from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useDispatch } from 'react-redux';
import { removeMovieFromLiked } from '../store';

const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState(undefined);
  const dispatch = useDispatch();
  const [addedToList, setAddedToList] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
      else navigate("/login");
    });
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const addToList = async (e) => {
    e.stopPropagation();
    try {
      const response = await axios.post("http://localhost:5000/api/user/add", {
        email,
        data: movieData,
      });
      if (response.data.msg === 'Movie already added to the list.') {
        setAlreadyExists(true);
      } else {
        setAddedToList(true);
      }
    } catch (error) {
      console.error("Error adding to list:", error);
    }
  };

  useEffect(() => {
    if (addedToList || alreadyExists) {
      const timeout = setTimeout(() => {
        setAddedToList(false);
        setAlreadyExists(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [addedToList, alreadyExists]);

  const movieNameIdArray = [
    { name: 'Extraction 2', id: 'Y274jZs5s7s' },
    { name: 'Movie 2', id: '1234567890' },
    // Add more movie names and IDs as needed
  ];

  const getVideoId = (name) => {
    const movie = movieNameIdArray.find((movie) => movie.name === name);
    return movie ? movie.id : '';
  };

  const handlePlayButtonClick = (e) => {
    e.stopPropagation();
    const videoId = getVideoId(movieData.name);
    navigate('/player', { state: { videoId } });
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='movie' />
      {isHovered && (
        <div className='hover'>
          <div className='image-video-container'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt='movie'
              onClick={handlePlayButtonClick}
            />
          </div>
          <div className='info-container flex column'>
            <h3 className='name' onClick={handlePlayButtonClick}>
              {movieData.name}
            </h3>
            <div className='icons flex j-between'>
              <div className='controls flex'>
                <IoPlayCircleSharp title='play' onClick={handlePlayButtonClick} />
                <RiThumbUpFill title='Like' />
                <RiThumbDownFill title='Dislike' />
                {isLiked ? (
                  <BsCheck
                    title='Remove From List'
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removeMovieFromLiked({ movieId: movieData.id, email }));
                    }}
                  />
                ) : (
                  <AiOutlinePlus title='Add to my list' onClick={addToList} />
                )}
              </div>
              <div className='info'>
                <BiChevronDown title='More Info' />
              </div>
              <div className="genres flex">
                <ul className="flex">
                  {movieData.genres?.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {addedToList && <p className="success">Added to My List</p>}
      {alreadyExists && <p className="error">Already in My List</p>}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    background-color: #181818;
    transition: 0.3s ease-in-out;
    .image-video-container {
      position: relative;
      height: 145px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
  .success {
    color: green;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .error {
    color: red;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;
