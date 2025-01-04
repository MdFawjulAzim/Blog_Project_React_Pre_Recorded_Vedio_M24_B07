import React from 'react'
import Layout from '../Layout/Layout'
import BlogList from '../Component/BlogList';
import { useState } from 'react';
import { useEffect } from 'react';
import { postLatest } from '../APIRequest/APIRequest';

const HomePage = () => {
  let [list,setList] = useState([])


  useEffect(() => {
      (async () => {
        let res = await postLatest();
        setList(res);
      })();
    }, []);


  return (
    <Layout>
      <BlogList list={list} />      
    </Layout>
  )
}

export default HomePage