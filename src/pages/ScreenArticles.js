import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ArticlesService } from '../services/DatabaseService'
import Articles from './Articles'


function ScreenArticles() {
  const { data, status } = useQuery(
    ['articles'],
    ArticlesService.getAll
  )

  return (
      <div>
        {status === 'success' && (
          <Articles data={data} />
        )}
      </div>
  )
}

export default ScreenArticles
