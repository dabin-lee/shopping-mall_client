import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { getClient } from './queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
  const element = useRoutes(routes)
  const queryClient = getClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {element}
    </QueryClientProvider>
  )
}
export default App
