import { SHA256 } from "bcrypto";

export const hash = (content: Buffer | string | Buffer[]): Buffer => {
  if (Array.isArray(content)) {
    let sha256 = SHA256.ctx;

    sha256.init();

    for (const element of content) {
      sha256 = sha256.update(element);
    }

    return sha256.final();
  }

  return SHA256.digest(content instanceof Buffer ? content : Buffer.from(content));
};
