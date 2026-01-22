'use server'

import qs from 'query-string';

const BASE_URL = process.env.COINGECKO_BASE_URL;
const API_KEY = process.env.COINGECKO_API_KEY;

if (!BASE_URL) throw new Error('CANT TAKE COINGECKO URL FROM ENV');
if (!API_KEY) throw new Error('CANT TAKE COINGECKO API KEY FROM ENV');