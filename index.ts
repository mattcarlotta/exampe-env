import type { CipherKey, Encoding } from "crypto";
import encrypt from "./encrypt";
import decrypt from "./decrypt";

export type { CipherKey, Encoding };

export interface CryptOptions {
  algorithm: string;
  envs: string | Buffer;
  encoding: Encoding;
  input: Encoding;
  secret: CipherKey;
}

export type EncryptResult = {
  encryptedEvs: string;
  iv: string;
};

export type DecryptResult = {
  decryptedEnvs: string;
  decryptedResult: any;
};

export interface DecryptOptions extends CryptOptions {
  envs: string;
  iv: string;
}

export { decrypt, encrypt };

const env = {
  decrypt,
  encrypt
};

export default env;
