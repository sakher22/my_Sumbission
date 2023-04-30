function Header(props)
{return(<p>
  {props.course}
</p>);}

function Part(props)
{
  return(
    <p>{props.data[0]} {props.data[1]}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content data1={[part1,exercises1]} data2={[part2,exercises2]} data3={[part3,exercises3]}/>
      <Total sum={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App;
