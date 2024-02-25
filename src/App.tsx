import { Route, Routes } from 'react-router-dom'
import Layout from './assets/Layout'
import Main from './pages/Main'
import CollectionPage from './pages/CollectionPage'
import { collections } from './collections'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        {collections.map((collection) => (
          <Route
            path={collection.title}
            key={collection.title}
            element={
              <CollectionPage
                cards={collection.cards}
                title={collection.title}
                content={collection.content}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
