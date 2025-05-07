import { readFile } from "fs/promises";

const data = await readFile("inputs/059_cipher.txt", "utf-8");

const decrypt = (ciphertext: string, password: string): string => ciphertext
    .split(",")
    .map((char, index) => parseInt(char, 10) ^ password.charCodeAt(index % password.length))
    .join(",");

const asciiToString = (ascii: string): string => ascii
    .split(",")
    .map((num) => String.fromCharCode(parseInt(num, 10)))
    .join("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const passwordLength = 3;
const possibleKeys = Array.from({ length: alphabet.length ** passwordLength }, (_, i) => {
    let key = "";

    for (let j = 0; j < passwordLength; j++)
        key += alphabet[Math.floor(i / alphabet.length ** j) % alphabet.length];

    return key;
});

let originalText = "";

for (const key of possibleKeys) {
    const decrypted = decrypt(data, key);
    const asciiText = asciiToString(decrypted);

    if (asciiText.includes(" the ")) {
        originalText = decrypted;
        break;
    }
}

const asciiSum = originalText
    .split(",")
    .map((num) => parseInt(num, 10))
    .reduce((sum, num) => sum + num, 0);

export default asciiSum;
