import ListCast from './components/ListCast';
import Support from './components/Support';
import Welcome from "./components/Welcome"

function App() {

  const name = 'StarGazers';

  return (
    <main className='container'>
      <hgroup>
        <img src='/images/group.svg' alt='StarGazers Group' />
        <Welcome name={name} />
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCast />
        <Support />
      </hgroup>
    </main>
  )
}
export default App
