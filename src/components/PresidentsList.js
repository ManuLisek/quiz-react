import President from './President';
import {presidents} from '../data/dataPresidents';
import PropTypes from 'prop-types';


const PresidentsLists = (props) => {
    const {isPresidentVisible, isPresidentGuessed} = props
    const presidentsList = presidents.map((president, index) => (
        <President key={index} president={president} isPresidentVisible={isPresidentVisible} isPresidentGuessed={isPresidentGuessed}/>
        
    ))

  return (
    <div className='presidents-list'>
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
    isPresidentVisible: PropTypes.any,
    isPresidentGuessed: PropTypes.bool,
  }

export default PresidentsLists;