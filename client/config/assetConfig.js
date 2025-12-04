
const BASE_URL = ''; 

export const getAssetUrl = (path) => {
  return `${BASE_URL}${path}`; 
};

export const PUBLIC_ROOT = BASE_URL;