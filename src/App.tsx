// import { useState, useEffect } from 'react';
import {createUserThunk} from "./features/usersSlice"
import './App.css';
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const user = {name: "nameTEST4", email: "TEST5"}
  const status = useAppSelector((store) => store.users.status)
  useEffect(() => {dispatch(createUserThunk(user))}, [])
  return (
    <>
      <div>Hello NodeJS</div>
      <div>Some response is: "{status}"</div>
    </>
  );
}

export default App;
