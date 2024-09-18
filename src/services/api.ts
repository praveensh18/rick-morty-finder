import axios from 'axios';
import { APIResponse, Character, Episode, Location, BaseEntity } from '../types/api';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page: number): Promise<APIResponse<Character>> => {
	const response = await axios.get(`${BASE_URL}/character?page=${page}`)
	return response.data
}

export const fetchLocations = async (page: number): Promise<APIResponse<Location>> => {
	const response = await axios.get(`${BASE_URL}/location?page=${page}`)
	return response.data
}

export const fetchEpisodes = async (page: number): Promise<APIResponse<Episode>> => {
	const response = await axios.get(`${BASE_URL}/episode?page=${page}`)
	return response.data
}

export const fetchSingleEntity = async (entityType: string, id: string | number): Promise<APIResponse<BaseEntity>> => {
	const response = await axios.get(`${BASE_URL}/${entityType}/${id}`)
	return response.data
}

// export const fetchSingleLocation = async (id: string | number): Promise<APIResponse<Character>> => {
// 	const response = await axios.get(`${BASE_URL}/location/${id}`)
// 	return response.data
// }

// export const fetchSingleEpisode = async (id: string | number): Promise<APIResponse<Character>> => {
// 	const response = await axios.get(`${BASE_URL}/episode/${id}`)
// 	return response.data
// }