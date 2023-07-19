import { useState } from 'react';
import ListCast from './components/ListCast';
import Support from './components/Support';
import Welcome from "./components/Welcome"

function App() {

  const [memberInfo, setMemberInfo] = useState([]);
  const name = 'StarGazers';

  console.log(typeof memberInfo);

  return (
    <main className='container'>
      <hgroup>
        <img src='/images/group.svg' alt='StarGazers Group' />
        <Welcome name={name} />
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCast onChoice={(info) => { setMemberInfo(info) }} />
        <Support />
        {/* if using only 'memberInfo' it returns undefined first time and render an empty div. With 'memberInfo.id' it works */}
        {(memberInfo.id ?
          <article>
            <hgroup>
              <div>
                <img src={`images/${memberInfo.slug}.svg`} alt={memberInfo.name} />
                <h1>{memberInfo.name}</h1>
                <p>{memberInfo.bio}</p>
              </div>
            </hgroup>
          </article>
          : (<div></div>))}
      </hgroup>
    </main>
  )
}
export default App
