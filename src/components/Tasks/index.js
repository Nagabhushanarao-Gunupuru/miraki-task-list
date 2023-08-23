
import {Component} from 'react'
import { Link } from 'react-router-dom'
import {v4} from 'uuid'
import TaskItem from '../TaskItem'

import './index.css'



class Tasks extends Component {
  state = {titleInput: '', descriptionInput: '', tasksList: []}

  deleteTask = taskId => {
    const {tasksList} = this.state

    this.setState({
      tasksList: tasksList.filter(task => task.id !== taskId),
    })
  }

  toggleIsChecked = id => {
    this.setState(prevState => ({
      tasksList: prevState.tasksList.map(eachTask => {
        if (eachTask.id === id) {
          return {...eachTask, isChecked: !eachTask.isChecked}
        }
        return eachTask
      }),
    }))
  }

  tasksListRendered = () => {
    const {tasksList} = this.state

    return tasksList.map(eachTask => (
      <TaskItem
        key={eachTask.id}
        taskDetails={eachTask}
        toggleIsChecked={this.toggleIsChecked}
        deleteTask={this.deleteTask}
      />
    ))
  }

  Logout = ()=>{
    const {history} = this.props 
    history.replace('/login')
  }

  onAddTask = event => {
    event.preventDefault()
    const {titleInput, descriptionInput} = this.state
    
    const newTask = {
      id: v4(),
      title: titleInput,
      description: descriptionInput,
      date: new Date(),
      isChecked: false,
  
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      titleInput: '',
      descriptionInput: '',
    }))
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDescriptionInput = event => {
    this.setState({descriptionInput: event.target.value})
  }

  render() {
    const {titleInput, descriptionInput, tasksList} = this.state
    return (
      <div className="bg-container">
        <div className="details-container">
          <div className="card-container">
            <h1 className="taskHeading">Tasks</h1>
            <form className="form-container" onSubmit={this.onAddTask}>
              <p className="taskParagraph">Manage your Tasks</p>
              <input
                type="text"
                placeholder="Task Title"
                className="text-input"
                onChange={this.onChangeTitleInput}
                value={titleInput}
              />
              <textarea
                className="text-area"
                placeholder="Task Description"
                onChange={this.onChangeDescriptionInput}
                value={descriptionInput}
              />
              <button type="submit" className="button">
                Add Task
              </button>
            </form>
          </div>
          <div className="image-container">
            <img
              src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1692802187/comments-img_uvhwvn.png"
              alt="Tasks"
              className="tasks-image"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <p className="task-para">
          <span className="task-count">{tasksList.length}</span>Tasks
        </p>
        <ul className="list-container">{this.tasksListRendered()}</ul>
        <Link><button type='button' className='button' onClick={this.Logout}>Logout</button></Link>
      </div>
    )
  }
}

export default Tasks
