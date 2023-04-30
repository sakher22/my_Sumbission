function Header(props)
{return(<p>
  {props.course}
</p>);}
function Content(props)
{
  return(
    <>
    <p>{props.data1[0]} {props.data1[1]}</p>
    <p>{props.data2[0]} {props.data2[1]}</p>
    <p>{props.data3[0]} {props.data3[1]}</p>
    </>

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
