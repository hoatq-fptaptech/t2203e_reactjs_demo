import React from 'react';
import Student from './components/Student';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      students: [
        {
            name: "Đỗ Văn Thắng",
            mark:8,
            telephone: ["0987654321","0123456789"]
        },
        {
          name: "Nguyễn Quang Thái",
          mark:9,
          telephone: ["0987654321","0123456789"]
        }
      ],
      className: "T2203E",
      new_student:{
        name:"",
        mark:0,
        telephone:""
      }
    }
    this.changeClassName = this.changeClassName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitStudent = this.submitStudent.bind(this);
  }
  changeClassName(event){
      const v = event.target.value;
      this.setState({
        className: v
      })
  }
  handleInput(event){
    const input = event.target;
    const new_student = this.state.new_student;
    new_student[input.name] = input.value;
    this.setState({
      new_student: new_student
    })
  }
  submitStudent(event){
      event.preventDefault();
      const abc = this.state.new_student;// "0292838"
      abc.telephone = [abc.telephone]; // ["0292838"]
      const students = this.state.students;
      students.push(abc);
      this.setState({students:students});
  }
  render(){
    const students =  this.state.students;
    const className = this.state.className;
    const new_student = this.state.new_student;
    return (
      <div className="App">
        <h1>Danh sách sinh viên lớp {className}:</h1>
        {
          students.map((v,k)=>{
            return <Student key={k} name={v.name} mark={v.mark} telephone={v.telephone} />
          })
        }
        <hr/>
        <input onChange={this.changeClassName} type='text' value={className} placeholder='Enter class name...'/>
        <hr/>
        <h2>Thêm sinh viên</h2>
        <form method='post' onSubmit={this.submitStudent}>
          <input onChange={this.handleInput} value={new_student.name} name="name" type='text' placeholder="Name.."/>
          <input onChange={this.handleInput} value={new_student.mark}  name="mark" type='number' placeholder="Mark.."/>
          <input onChange={this.handleInput} value={new_student.telephone}  name="telephone" type='text' placeholder="Telephone.."/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
