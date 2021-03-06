import {AnyCoinCode, AnyTokenCode, Blockchains} from '@emeraldwallet/core';
import {createSelector} from 'reselect';
import { IState } from '../types';

export const fiatCurrency = (state: IState) => state.settings.localeCurrency;

export const fiatRate = (token: AnyCoinCode | string, state: IState): number | undefined => {
  const rates = state.settings.rates;
  if (!rates) {
    return undefined;
  }
  let code = token.toUpperCase();
  if (code == "TBTC") {
    code = "TESTBTC";
  }
  const strRate = rates[code];
  if (strRate) {
    return parseFloat(strRate);
  }
  console.warn("No rate", token);
  return undefined;
};

export const modeChains = (state: IState) => state.settings.mode.chains;
export const mode = (state: IState) => state.settings.mode;

export const currentChains = createSelector(
  [modeChains],
  (chains) => chains.map((chain) => Blockchains[chain.toLowerCase()])
);