import { AxiosPromise } from 'axios';
import httpClient from '../../utils/httpClient';
import { getCrewMembersUrl } from '../../utils/urls';

export function getCrewMembersApi(): AxiosPromise {
  return httpClient.get(getCrewMembersUrl());
}
