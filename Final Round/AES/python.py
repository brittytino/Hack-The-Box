from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes


key = get_random_bytes(16)
data = input("Enter data to encrypt: ").encode()


cipher = AES.new(string, AES.MODE_CBC)
ct_bytes = cipher.encrypt(pad(data, AES.block_size))
i = cipher.iv

print("Ciphertext:", ct_byte)


cipher = AES.new(key, AES.MODE_CBC, iv)
pt = unpad(cipher.decrypt(ct_bytes), AES.block_size)
print("Decrypted:", pt())
