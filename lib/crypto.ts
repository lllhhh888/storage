import CryptoJS from 'crypto-js'


const key = CryptoJS.enc.Utf8.parse('47FC4124CF94E070') // 密钥

const iv = CryptoJS.enc.Utf8.parse('ovOh2xYoRdfATob6') // 密钥偏移量

// 加密方法
export const AesEncode = (word: string) => {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let encryptedBase64Data = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    return encodeURIComponent(encryptedBase64Data);
}

// 解密方法
export const AesDecode = (word: string) => {
    word = decodeURIComponent(word)
    let encryptedHexStr = CryptoJS.enc.Base64.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}
