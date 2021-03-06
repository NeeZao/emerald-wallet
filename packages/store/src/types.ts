import { IApi, IBackendApi } from '@emeraldwallet/core';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as accounts from './accounts';
import { IAccountsState } from './accounts/types';
import { IAddAccountState } from './add-account/types';
import * as addressBook from './address-book';
import {IAddressBookState} from './address-book/types';
import * as application from './application';
import {IBlockchainsState} from './blockchains/types';
import * as conn from './conn/types';
import {IScreenState} from './screen/types';
import {ISettingsState} from './settings/types';
import {ITokensState} from './tokens/types';
import {ITransactionState} from './transaction/types';
import {IHDPreviewState} from "./hdpath-preview/types";
import {IHWKeyState} from "./hwkey/types";
import {Triggers} from "./triggers";

export interface IState {
  [application.moduleName]: any;
  [accounts.moduleName]: IAccountsState;
  [addressBook.moduleName]: IAddressBookState;
  blockchains: IBlockchainsState;
  [conn.moduleName]: any;
  hwkey: IHWKeyState;
  screen: IScreenState;
  settings: ISettingsState;
  history: any;
  tokens: ITokensState;
  transaction: ITransactionState;
  addAccount?: IAddAccountState;
  hdpathPreview?: IHDPreviewState;
}
export type GetState = () => IState;
export interface IExtraArgument {
  api: IApi;
  backendApi: IBackendApi;
  triggers: Triggers;
}
export type Dispatched<T> = (dispatch: Dispatch, getState: GetState, extra: IExtraArgument) => void;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IState, null, Action<string>>;
