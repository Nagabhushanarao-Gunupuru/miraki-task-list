
import{formatDistanceToNow} from 'date-fns'
import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {id, title, description, date, isChecked} = taskDetails
  const initial = title ? title[0].toUpperCase() : ''
  const textChecked = isChecked ? 'button checked' : 'button'
  const checkedImgUrl = isChecked
    ? 'https://res.cloudinary.com/dsnbihsqy/image/upload/v1692801864/like_qr6pm0.png'
    : 'https://res.cloudinary.com/dsnbihsqy/image/upload/v1692801956/like1_okqqmp.png'
  const postTime = formatDistanceToNow(date)

  const onClickCheck = () => {
    const {toggleIsChecked} = props
    toggleIsChecked(id)
  }
  const onDeleteTask = () => {
    const {deleteTask} = props
    deleteTask(id)
  }

  return (
    <li className="task-items-container">
      <div className="task-container">
        <div>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="time">{postTime} ago</p>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="checked-button">
          <img src={checkedImgUrl} alt="check" className="check" />
          <button
            type="button"
            className={`check ${textChecked}`}
            onClick={onClickCheck}
          >
            Check
          </button>
        </div>
        <button
          className="add-button"
          type="button"
          onClick={onDeleteTask}
          data-testId="delete"
        >
          <img
            src="https://res.cloudinary.com/dsnbihsqy/image/upload/v1692802082/delete-img_gufcjv.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="hr-taskLine" />
    </li>
  )
}

export default TaskItem
