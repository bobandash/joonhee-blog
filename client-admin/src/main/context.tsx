import {createContext} from 'react'

export const SignedInContext = createContext({
  isSignedIn: false,
  getSignedInStatus: async function(){}  
});
