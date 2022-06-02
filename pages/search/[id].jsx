import React from 'react'
export const getStaticPaths = async () => {
  const res = await fetch('https://bynns3kq11.execute-api.eu-west-3.amazonaws.com/allusers');
  const data = await res.json();

  const paths = data.map(data => {
    return {
      params: { id: data.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://bynns3kq11.execute-api.eu-west-3.amazonaws.com/user/' + id)
  const data = await res.json();

  return {
    props: { data: data }
  }
}

const Details = ({ data }) => {
  return (
    <div>
      {data.id}
      {data.email}
    </div>
  )
}

export default Details