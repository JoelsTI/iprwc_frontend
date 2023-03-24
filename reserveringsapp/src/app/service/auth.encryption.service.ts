import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptionService {
    secretKey = "o9szYIOq1rRMiouNhNvaq96lqUvCekxR";

    constructor() {
    }

    encrypt(value: string): string {
        const keyBase64 = this.secretKey;
        const key = CryptoJS.enc.Base64.parse(keyBase64);
        const srcs = CryptoJS.enc.Utf8.parse(value);
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});

        return encrypted.toString();
    }

    decrypt(value){
        const keyBase64 = this.secretKey;
        const key = CryptoJS.enc.Base64.parse(keyBase64);
        const decrypt = CryptoJS.AES.decrypt(value, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});

        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
}
