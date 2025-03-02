import React from "react";



const API_KEY = process.env.REACT_APP_API_KEY
const BASE_PATH = process.env.REACT_APP_API_BASE_PATH


export function getCollections(query: string | null) {
  return fetch(`${BASE_PATH}/search/collection?query=${query}&api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}