import React from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_PATH = process.env.REACT_APP_API_BASE_PATH


export function getLatestMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getTopLatedMovies() {
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getUpcomingMovies() {
  return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}
