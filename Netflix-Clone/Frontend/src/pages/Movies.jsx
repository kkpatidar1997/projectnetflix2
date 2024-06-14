// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchMovies, getGenres } from '../store';
// import { firebaseAuth } from '../utils/firebase-config';
// import { onAuthStateChanged } from 'firebase/auth';
// import styled from 'styled-components';
// import Navbar from '../components/Navbar';
// import Slider from '../components/Slider';
// import NotAvailable from '../components/NotAvailable';
// import SelectGenre from '../components/SelectGenre';

// const Movies = () => {
    

//   const [isScrolled, setIsScrolled] = useState(false)


//   const movies = useSelector((state) => state.netflix.movies);
//   const genres = useSelector((state) => state.netflix.genres);
//   const dispatch = useDispatch();


//   useEffect(() =>{
//       dispatch(getGenres())
//   },[dispatch])

//   useEffect(() => {

//     dispatch(fetchMovies({type: "movie"}))
    
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
//         <SelectGenre genres={genres} type="movie"/>
//             {
//                 movies.length ? <Slider movies={movies}/> :
//                 <NotAvailable/>
//             }
//         </div>
//     </Container>
//   )
// }

// export default Movies
// const Container = styled.div`
// .data {
//     margin-top: 8rem;
//     .not-available {
//       text-align: center;
//       color: white;
//       margin-top: 4rem;
//     }
//   }
//`;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

const Movies = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const movies = useSelector((state) => state.netflix.movies) || [];
  const genres = useSelector((state) => state.netflix.genres) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies({ type: 'movie' }));
  }, [dispatch]);

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
        <SelectGenre genres={genres} type='movie' />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
};

export default Movies;

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
