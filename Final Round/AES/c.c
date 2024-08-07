#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <openssl/aes.h>
#include <openssl/rand.h>

void handleErrors() {
    fprintf(stderr, "Error occurred.\n");
    exit(1);
}

int main() {
    AES_KEY encryptKey, decryptKey;
    unsigned char key[16];
    unsigned char iv[AES_BLOCK_SIZE];
    unsigned char data[128], encrypted[128], decrypted[128];

    RAND_bytes(key, sizeof(key));
    RAND_bytes(iv, sizeof(iv));

    printf("Enter data to encrypt: ");
    fgets((char*)data, sizeof(data), stdin);
    data[strcspn((char*)data, "\n")] = 0;

    AES_set_encrypt_key(key, 128, &encryptKey);
    AES_cbc_encrypt(data, encrypted, sizeof(data), &encryptKey, iv, AES_ENCRYPT);

    printf("Ciphertext: %s\n", encrypted);

    AES_set_decrypt_key(key, 128, &decryptKey);
    AES_cbc_encrypt(encrypted, decrypted, sizeof(encrypted), &decryptKey, iv, AES_DECRYPT);

    printf("Decrypted: %s\n", decrypted);

    return 0;
}
