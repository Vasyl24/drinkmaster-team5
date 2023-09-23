import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { useAuth } from 'useAuth';

import { refreshUser } from './redux/auth/authOperations';
import SharedLayout from './components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { WelcomePageLayout } from './pages/WelcomePage/Layout/WelcomePageLayout';
import HomePage from './pages/HomePage/HomePage';
import DrinkPage from 'pages/DrinkPage/DrinkPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MyDrinksPage from 'pages/MyDrinksPage/MyDrinksPage';
import FavoriteDrinkPage from 'pages/FavoriteDrinksPage/FavoriteDrinksPage';
// import SignInPage from 'pages/SignInPage/SignInPage';
// import SignUpPage from 'pages/SignUpPage/SignUpPage';

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const WelcomePageLayout = lazy(() =>
//   import('./pages/WelcomePage/Layout/WelcomePageLayout')
// );
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const SharedLayout = lazy(() =>
//   import('./components/SharedLayout/SharedLayout')
// );
// const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));

function App() {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePageLayout />}>
          <Route index element={<WelcomePage />}>
            {/* <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route> */}
            {/* <Route
              path="/signup"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<RegisterPage />}
                />
              }
            /> */}
          </Route>
        </Route>

        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomePage />} />
          {/* <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          />
          <Route
            path="/drinks"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            } 
          />*/}
          {/* <Route path="/drinks" element={<DrinksPage />} /> */}
          {/* <Route
            path="//drink/:drinkId"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          /> */}
          <Route path="/drink/:drinkId" element={<DrinkPage />} />
          {/* <Route
            path="/add"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          /> */}
          {/* <Route path="/add" element={<AddDrinkPage />} /> */}
          {/* <Route
            path="/my"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          /> */}
          <Route path="/my" element={<MyDrinksPage />} />
          {/* <Route
            path="/favorite"
            element={
              <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
            }
          /> */}
          <Route path="/favorite" element={<FavoriteDrinkPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
