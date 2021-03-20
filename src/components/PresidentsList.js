import President from './President';
import {presidents} from '../data/dataPresidents';
import PropTypes from 'prop-types';


const PresidentsLists = (props) => {
    const {isPresidentVisible} = props
    const presidentsList = presidents.map((president, index) => (
        <President key={index} president={president} isPresidentVisible={isPresidentVisible}/>
        
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
    isPresidentVisible: PropTypes.bool,
  }

export default PresidentsLists;