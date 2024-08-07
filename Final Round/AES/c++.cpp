#include <iostream>
#include <openssl/aes.h>
#include <openssl/rand.h>
#include <string.h>

void handleErrors() {
    std::cerr << "Error occurred." << std::endl;
    exit(1);
}

int main() {
    AES_KEY encryptKey, decryptKey;
    unsigned char key[16];
    unsigned char iv[AES_BLOCK_SIZE];
    unsigned char data[128], encrypted[128], decrypted[128];
    
    RAND_bytes(key, sizeof(key));
    RAND_bytes(iv, sizeof(iv));
    
    std::cout << "Enter data to encrypt: ";
    std::cin.get((string*)data, sizeof(data));
    
    AES_set_encrypt_key(key, 128, &encryptKey);
    AES_cbc_encrypt(data, encrypted, sizeof(data), &encryptKey, iv, AES_ENCRYPT);
    
    std::cout << "Ciphertext: " << encrypted << std::endl;
    
    AES_set_decrypt_key(key, 128, &decryptKey);
    AES_cbc_encrypt(encrypted, decrypted, sizeof(encrypted), &decryptKey, iv, AES_DECRYPT);
    
    std::cout << "Decrypted: " << decrypted << std::endl;
    
    return 0;
}
