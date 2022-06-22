export const urlBase = 'https://api.spacexdata.com/v4';

export const getRocketsUrl = (): string => `${urlBase}/rockets`;

export const getCrewMembersUrl = (): string => `${urlBase}/crew`;
