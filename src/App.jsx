import { useState, useEffect } from 'react';
import ListCast from './components/ListCast';
import Modal from './components/Modal';
import Nav from './components/Nav';

function App() {
  const [cast, setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState([]);

  const fetchCast = async () => {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  })

  return (
    <>
      <Nav
        cast={cast}
        onChoice={(info) => { setMemberInfo(info) }} />
      <main className='container'>
        <hgroup>
          <img src='/images/group.svg' alt='StarGazers Group' />
          <h1>Meet the StarGazers</h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast
            cast={cast}
            onChoice={(info) => { setMemberInfo(info) }} />
          {/* if using only 'memberInfo' it returns undefined first time and render an empty div. With 'memberInfo.id' it works.
        Also, in the Modal component below I could not set member info to null nor undefined as it cause an error when closing the modal ( Uncaught TypeError: Cannot read properties of null/undefined (reading 'id'))

        NOTE: changed 'id' for 'bio' show first char index 0 show in modal
         */}
          {(memberInfo.bio &&
            <Modal
              member={memberInfo}
              handleClose={() => { setMemberInfo([]) }}
              handleChange={(info) => { setMemberInfo(cast[info]) }} />
          )}
        </hgroup>
      </main>
    </>
  )
}
export default App
