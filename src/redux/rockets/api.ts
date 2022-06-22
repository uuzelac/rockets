import { AxiosPromise } from 'axios';
import httpClient from '../../utils/httpClient';
import { getRocketsUrl } from '../../utils/urls';

export function getRocketsApi(): AxiosPromise {
  return httpClient.get(getRocketsUrl());
}
