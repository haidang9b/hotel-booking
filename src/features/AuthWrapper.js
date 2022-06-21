import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoadingSelector } from '../redux/selector'
import { getUser } from '../redux/authSlice';
import Loading from '../components/Loading';

export default function AuthWrapper({ children }) {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingSelector);
    useEffect(() => {
		dispatch(getUser());
		// eslint-disable-next-line
	  }, []);
    if( isLoading ) {
        return <Loading />;
    }
    return (<>
        {children}
    </>
  )
}
