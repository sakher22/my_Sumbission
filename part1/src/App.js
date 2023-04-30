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
      <Part data={props.data1}/>
      <Part data={props.data2}/>
      <Part data={props.data3}/>
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
  const part1={
    name: 'Fundamentals of React',
    exercises:10
  }
 const part2={
  name: 'Using props to pass data',
  exercises:7
 }
 const part3={
  name: 'State of a component',
  exercises:14
 }

  return (
    <div>
      <Header course={course}/>
      <Content data1={part1} data2={part2} data3={part3}/>
      <Total sum={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App;
