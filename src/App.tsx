import { Route, Routes } from 'react-router-dom'
import Layout from './assets/Layout'
import Main from './pages/Main'
import CollectionPage from './pages/CollectionPage'
import { collections } from './collections'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='политика-конфиденциальности' element={<PrivacyPolicy />} />
        <Route index element={<Main />} />
        <Route path='/about' element={<AboutPage />} />
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
