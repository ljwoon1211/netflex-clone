import React from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_PATH = process.env.REACT_APP_API_BASE_PATH


export function getOnTheAirTvs() {
  return fetch(`${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}


export function getAiringTvs() {
  return fetch(`${BASE_PATH}/tv/airing_today?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getTopLatedTvs() {
  return fetch(`${BASE_PATH}/tv/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}

export function getPopularTs() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}`).then(
    (response) => response.json()
  )
}
