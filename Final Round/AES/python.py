from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes

# Get user input
key = get_random_bytes(16)
data = input("Enter data to encrypt: ").encode()

# Encrypt
cipher = AES.new(key, AES.MODE_CBC)
ct_bytes = cipher.encrypt(pad(data, AES.block_size))
iv = cipher.iv

print("Ciphertext:", ct_bytes)

# Decrypt
cipher = AES.new(key, AES.MODE_CBC, iv)
pt = unpad(cipher.decrypt(ct_bytes), AES.block_size)
print("Decrypted:", pt.decode())
