import React from 'react'
import { TableComponent } from '../TableComponent'
import { ThirdTabletask } from './ThirdTabletask'

export const SubTableTask = (props) => {
   return (
      <div style={{ textAlign: 'center' }}>
         <h1>SubTableTask</h1>

         <TableComponent columns={props.columns} data={props.data}></TableComponent>
         <ThirdTabletask ></ThirdTabletask>
      </div>
   )
}
