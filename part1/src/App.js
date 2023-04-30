function Header(props)
{return(<p>
  {props.course}
</p>);}

function Part(props)
{
  return(
    <p>{props.data.name} {props.data.exercises}</p>
  )
}
function Content(props)
{
  return(
    <div>
      <Part data={props.parts[0]}/>
      <Part data={props.parts[1]}/>
      <Part data={props.parts[2]}/>
    </div>
  )
}
function Total(props)
{
  return(   
    <p>Number of exercises {props.sum}</p>
  )
}
function App() {
  const course = 'Half Stack application development'
  const part1=[{
    name: 'Fundamentals of React',
    exercises:10
  },
  {
  name: 'Using props to pass data',
  exercises:7
 },
 {
  name: 'State of a component',
  exercises:14
 }]

  return (
    <div>
      <Header course={course}/>
      <Content parts={part1}/>
      <Total sum={part1[0].exercises + part1[1].exercises + part1[1].exercises}/>
    </div>
  )
}

export default App;
