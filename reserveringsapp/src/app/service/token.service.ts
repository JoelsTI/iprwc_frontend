import { Injectable } from '@angular/core';
import {EncryptionService} from "./auth.encryption.service";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private encryption: EncryptionService) { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, this.encryption.encrypt(token));
  }

  public getToken(): string | null {
    const token = window.sessionStorage.getItem(TOKEN_KEY);

    if(token == null) {
        return null;
    }

    return this.encryption.decrypt(token);
  }
}
