import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../../providers/AuthenticatedUser';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../../../firebase';
import Link from 'next/link';


const UserDetails = () => {
  const { user } = UserAuth();

  const [data, setData] = useState()


  useEffect(() => {
    getDoc(doc(firestore, "users", `${user.uid}`)).then(docSnap => {
      if (docSnap.exists()) {
        setData(docSnap.data())
      } else {
        console.log("No such document!");
      }
    })
  }, [user])

  return (
    <div>
      {
        data &&
        <div>
          <p>{data.displayName}</p>
          <p>{data.email}</p>
          <Link href={data.website}>
            <a>{data.website}</a>
          </Link>
          <p>{data.bio}</p>
        </div>
      }
    </div>
  )
}

export default UserDetails