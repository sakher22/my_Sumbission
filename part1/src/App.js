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
    <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  )
}
function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App;
