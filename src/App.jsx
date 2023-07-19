import Welcome from "./components/Welcome"

function App() {

  const name = 'Marcel';

  return (
    <div className='container'>
      <hgroup>
        <img src='/images/group.svg' alt='StarGazers Group' />
        <Welcome name={name} />
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      </hgroup>
    </div>
  )
}
export default App
