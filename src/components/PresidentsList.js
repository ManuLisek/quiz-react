import President from './President'
import {presidents} from '../data/dataPresidents'


const PresidentsLists = () => {

  const presidentsList = presidents.map((president, index) => (
    <President key={index} president={president} />
    
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

export default PresidentsLists;