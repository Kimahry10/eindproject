import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { H1, H2 } from './styles';
import BaseLayout from '../../components/BaseLayout'


const Search = () => {

  const [fetchedData, setFetchedData] = useState();
  const [tset, setTset] = useState(1)

  useEffect(() => {
    const url = "https://bynns3kq11.execute-api.eu-west-3.amazonaws.com/allusers";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setFetchedData(json)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <BaseLayout>
      <H1>Search</H1>
      <H2>Profiles</H2>
      {
        fetchedData && fetchedData.map(data =>
          // profile card or something
          <Link href={`/search/${data.id}`} key={data.id}>
            <a>
              <span>{data.id}</span>
              <span>{data.email}</span>
              <span>{data.images}</span>
            </a>
          </Link >
        )
      }
      <h2>images</h2>
      <div className='images'>

      </div>
    </BaseLayout >
  )
}

export default Search