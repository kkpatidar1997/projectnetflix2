
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import {  getUserLikedMovies } from '../store';
// import { firebaseAuth } from '../utils/firebase-config';
// import { onAuthStateChanged } from 'firebase/auth';
// import styled from 'styled-components';
// import Navbar from '../components/Navbar';
// import Card from '../components/Card';

// const UserLiked = () => {
      
//   const navigate = useNavigate()
//   const [isScrolled, setIsScrolled] = useState(false)
//   const movies = useSelector((state) => state.netflix.movies);
//   const dispatch = useDispatch();
//   const [email,setEmail] = useState(null);

//   onAuthStateChanged(firebaseAuth,(currentUser) => {
//     if(currentUser) setEmail(currentUser.email);
//     else navigate("/login");
//   })


//   useEffect(() => {
//     console.log(email)
//     if (email) {
//       dispatch(getUserLikedMovies(email));
//     }
//   }, [dispatch,email]);


//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset===0 ? false : true);
//     return () =>  (window.onscroll =null);
//   }

//   return (
//     <Container>
//       <Navbar isScrolled={isScrolled}/>
//       <div className='content flex column'>
//         <h1>My List</h1>
//         <div className='grid flex'>
//         {movies?.map((movie, index) => {
//             return (
//               <Card
//                 movieData={movie}
//                 index={index}
//                 key={movie.id}
//                 isLiked={true}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </Container>
//   );
  
// }

// export default UserLiked

// const Container = styled.div`
// .content {
//     margin: 2.3rem;
//     margin-top: 8rem;
//     gap: 3rem;
//     h1 {
//       margin-left: 3rem;
//     }
//     .grid {
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
//   }
// `;
// // 
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getUserLikedMovies } from '../store';
// import { firebaseAuth } from '../utils/firebase-config';
// import { onAuthStateChanged } from 'firebase/auth';
// import styled from 'styled-components';
// import Navbar from '../components/Navbar';
// import Card from '../components/Card';

// const UserLiked = () => {
//   const navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const movies = useSelector((state) => state.netflix.movies);
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) {
//         setEmail(currentUser.email);
//       } else {
//         navigate('/login');
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [navigate]);

//   useEffect(() => {
//     if (email) {
//       dispatch(getUserLikedMovies(email));
//     }
//   }, [dispatch, email]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.pageYOffset !== 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Container>
//       <Navbar isScrolled={isScrolled} />
//       <div className='content flex column'>
//         <h1>My List</h1>
//         <div className='grid flex'>
//           {movies?.map((movie, index) => {
//             return (
//               <Card
//                 movieData={movie}
//                 index={index}
//                 key={movie.id}
//                 isLiked={true}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default UserLiked;

// const Container = styled.div`
//   .content {
//     margin: 2.3rem;
//     margin-top: 8rem;
//     gap: 3rem;
//     h1 {
//       margin-left: 3rem;
//     }
//     .grid {
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
//   }
// `;
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { getUserLikedMovies } from '../store';
// import { firebaseAuth } from '../utils/firebase-config';
// import { onAuthStateChanged } from 'firebase/auth';
// import styled from 'styled-components';
// import Navbar from '../components/Navbar';
// import Card from '../components/Card';

// const UserLiked = () => {
//   const navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const movies = useSelector((state) => state.netflix.movies);
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) {
//         setEmail(currentUser.email);
//         console.log('User email set:', currentUser.email);
//       } else {
//         navigate('/login');
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [navigate]);

//   useEffect(() => {
//     if (email) {
//       console.log('Dispatching getUserLikedMovies with email:', email);
//       dispatch(getUserLikedMovies(email));
//     }
//   }, [dispatch, email]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.pageYOffset !== 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Container>
//       <Navbar isScrolled={isScrolled} />
//       <div className='content flex column'>
//         <h1>My List</h1>
//         <div className='grid flex'>
//           {movies?.length > 0 ? (
//             movies.map((movie, index) => (
//               <Card
//                 movieData={movie}
//                 index={index}
//                 key={movie.id}
//                 isLiked={true}
//               />
//             ))
//           ) : (
//             <p>No movies found in your list.</p>
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default UserLiked;

// const Container = styled.div`
//   .content {
//     margin: 2.3rem;
//     margin-top: 8rem;
//     gap: 3rem;
//     h1 {
//       margin-left: 3rem;
//     }
//     .grid {
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
//   }
// `;
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  getUserLikedMovies } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const UserLiked = () => {
      
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const [email,setEmail] = useState(null);

  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) setEmail(currentUser.email);
    else navigate("/login");
  })


  useEffect(() => {
    console.log(email)
    if (email) {
      dispatch(getUserLikedMovies(email));
    }
  }, [dispatch,email]);


  window.onscroll = () => {
    setIsScrolled(window.pageYOffset===0 ? false : true);
    return () =>  (window.onscroll =null);
  }

  return (
    <Container>
      <Navbar isScrolled={isScrolled}/>
      <div className='content flex column'>
        <h1>My List</h1>
        <div className='grid flex'>
        {movies?.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
  
}

export default UserLiked

const Container = styled.div`
.content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;