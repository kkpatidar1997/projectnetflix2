// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchMovies, getGenres } from '../store';
// import { firebaseAuth } from '../utils/firebase-config';
// import { onAuthStateChanged } from 'firebase/auth';
// import styled from 'styled-components';
// import Navbar from '../components/Navbar';
// import Slider from '../components/Slider';
// import NotAvailable from '../components/NotAvailable';
// import SelectGenre from '../components/SelectGenre';

// const TVShows = () => {
    
//   const navigate = useNavigate()
//   const [isScrolled, setIsScrolled] = useState(false)

//   const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
//   const movies = useSelector((state) => state.netflix.movies);
//   const genres = useSelector((state) => state.netflix.genres);
//   const dispatch = useDispatch();


//   useEffect(() =>{
//       dispatch(getGenres())
//   },[dispatch])

//   useEffect(() => {
//     //console.log(genresLoaded)
//    //if(genresLoaded) 
    
//       dispatch(fetchMovies({type: "tv"}))
    
//   },[]);

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset===0 ? false : true);
//     return () =>  (window.onscroll =null);
//   }

//   onAuthStateChanged(firebaseAuth,(currentUser) => {
//     //if(currentUser) navigate("/");
//   })
//   return (
//     <Container>
//         <div className='navbar'>
//             <Navbar isScrolled={isScrolled}/>
//         </div>
        
//         <div className='data'>
//         <SelectGenre genres={genres} type="tv"/>
//             {
//                 movies.length ? <Slider movies={movies}/> :
//                 <NotAvailable/>
//             }
//         </div>
//     </Container>
//   )
// }

// export default TVShows
// const Container = styled.div`
// .data {
//     margin-top: 8rem;
//     .not-available {
//       text-align: center;
//       color: white;
//       margin-top: 4rem;
//     }
//   }
// `;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

const TVShows = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies) || [];
  const genres = useSelector((state) => state.netflix.genres) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: 'tv' }));
    }
  }, [dispatch, genresLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      // Handle user state changes here
      // if (currentUser) navigate("/");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <div className='navbar'>
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className='data'>
        <SelectGenre genres={genres} type='tv' />
        {movies.length > 0 ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
};

export default TVShows;

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
