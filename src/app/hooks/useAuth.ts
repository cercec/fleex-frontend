'use client';
import {useLayoutEffect} from 'react';
import {redirect} from 'next/navigation';

const useAuth = (role: string) => {
    useLayoutEffect(() => {
        const isAuth = localStorage.getItem('userToken') !== null && localStorage.getItem('userRole') === role;
        if (!isAuth) {
            redirect('/');
        }
    }, [role]);
};

export default useAuth;
