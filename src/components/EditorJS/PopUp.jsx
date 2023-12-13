import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import video from '../../videos/help.mp4'
const PopUp = () => {
  return(
    <Popup trigger={<button className="button bg-green-200 rounded-md p-1 hover:bg-green-100"> Help </button>} modal>
      <video controls className='w-full h-1/2'>
        <source src={video} type='video/mp4'/>
      </video>
    </Popup>
  )
}

export default PopUp