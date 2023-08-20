import { useLoaderData,Outlet, useSubmit } from 'react-router-dom';
import { useEffect } from 'react';
import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/Auth';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit= useSubmit();
  useEffect(()=>{
    if (!token){
      return;
    }
    if(token==='EXPIRED'){
      submit(null,{action:'logout', method:'post'});
    }

    const duration= getTokenDuration();
    setTimeout(() => {
      submit(null,{action:'logout', method:'post'});
    }, duration);
  },[token,submit])
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
