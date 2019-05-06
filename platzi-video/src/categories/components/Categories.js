import React from 'react'
import Category from './Category'
import './Categories.css'
import SearchContainer from '../../widgets/containers/SearchContainer'
import Media from '../../playlist/components/Media'

const Categories = props => {
  return(
    <div className="Categories">
      <SearchContainer/>
      {
        props.search.map(item =>{
          // console.log(item);
          return <Media key={item.get('id')} {...item.toJS()} />
        })
      }
      {
        props.categories.map( item => {
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
