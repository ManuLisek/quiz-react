import President from '../President/President';
import {presidents} from '../../data/dataPresidents';
import PropTypes from 'prop-types';
import  './PresidentsList.scss';


const PresidentsLists = (props) => {
    const {isPresidentVisible, isPresidentGuessed} = props
    const presidentsList = presidents.map((president, index) => (
        <President key={index} president={president} isPresidentVisible={isPresidentVisible} isPresidentGuessed={isPresidentGuessed}/>
        
    ))

  return (
    <div className='presidentsList'>
      <table>
        <thead>
         <tr>
            <th>Prezydent</th>
            <th>Lata urzędowania</th>
         </tr>
        </thead>
        <tbody>
          {presidentsList}
        </tbody>
      </table>
    </div>
  )
}

PresidentsLists.propTypes = {
    isPresidentVisible: PropTypes.bool,
    isPresidentGuessed: PropTypes.bool,
  }

export default PresidentsLists;