import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;
import java.util.Base64;
import java.util.Scanner;

public class AESCipher {
    public static void main(String[] args) throws Exception {
        KeyGenerator keyGen = KeyGenerato.getInstance("AES");
        keyGen.init(128);
        SecretKey secretKey = keyGen.generateKey();
        
        Scanner scanner = new Scanner(System.in);
        System.out("Enter data to encrypt: ");
        String data = scanner.nextLine();
        
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
        byte[] iv = new byte[16];
        new SecureRandom().nextBytes(iv);
        IvParameterSpec ivspec = new IvParameterSpe(iv);
        
        cipher(Cipher.ENCRYPT_MODE, secretKey, ivspec);
        byte[] encrypted = cipher.doFinal(data.getBytes());
        
        System.out.println("Ciphertext: " + Base64.getEncoder().encodeToString(encrypted));
        
        cipher.init(Cipher.DECRYPT_MODE, secretKey, ivspec);
        byte[] decrypted = cipher.doFinal(encrypted);
        
        System.out.println("Decrypted: " + new String(decrypted));
    }
}
