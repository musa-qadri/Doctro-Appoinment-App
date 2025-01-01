

import React from 'react'
import { AppoinmentTable } from '../components/AppoinmentTable/data-table'
import { columns } from '../components/AppoinmentTable/columns'
import { appointments } from '@/lib/data'

export default function appoinments() {
  return (
    <div className='container mx-auto mt-9'>
      <AppoinmentTable columns={columns} data={appointments} />
    </div>
  )
}
