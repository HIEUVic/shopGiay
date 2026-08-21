import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'

function Search() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  function handleSearch(e) {
    e.preventDefault()

    if (!keyword.trim()) {
      navigate('/products')
      return
    }

    navigate(
      `/products?search=${encodeURIComponent(keyword.trim())}`
    )
  }

  return (
    <form
      className="search"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button type="submit">
        🔍
      </button>
    </form>
  )
}

export default Search