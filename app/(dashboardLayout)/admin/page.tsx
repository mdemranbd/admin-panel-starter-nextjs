"use client"
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { decrement, increment } from '@/app/redux/slice/counterSlice';
import React from 'react';

const AdminPage = () => {
    const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
    return (
        <div>
             <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='mx-5 text-3xl'>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
        </div>
    );
};

export default AdminPage;