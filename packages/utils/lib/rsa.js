import jsencrypt from 'jsencrypt';

export default (str, key) => {
  const encrypted = new jsencrypt();
  encrypted.setPublicKey(key);
  return encrypted.encrypt(str);
};
