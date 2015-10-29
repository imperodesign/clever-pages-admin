const BASE_URL = window.BASE_URL || 'http://localhost:3000'
const API_BASE_URL = window.API_BASE_URL || 'http://localhost:3000'

export default {
  BASE_URL: BASE_URL,
  API_PAGES_URL: `${API_BASE_URL}/pages`,
  LOAD_PAGES: 'LOAD_PAGES',
  CREATE_PAGE: 'CREATE_PAGE',
  EDIT_PAGE: 'EDIT_PAGE',
  DELETE_PAGE: 'DELETE_PAGE',
  SEARCH_PAGE: 'SEARCH_PAGE'
}
