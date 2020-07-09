using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.DataAccessLayer.Encryption {
  public class AesOperation {
    public static string EncryptString(string key, string plainText) {
      byte[] iv = new byte[16];
      byte[] array;

      using (var aes = Aes.Create()) {
        aes.Key = Encoding.UTF8.GetBytes(key);
        aes.IV = iv;

        var encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

        using var memoryStream = new MemoryStream();
        using var cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
        using (var streamWriter = new StreamWriter(cryptoStream)) {
          streamWriter.Write(plainText);
        }

        array = memoryStream.ToArray();
      }

      return Convert.ToBase64String(array);
    }

    public static string DecryptString(string key, string cipherText) {
      byte[] iv = new byte[16];
      byte[] buffer = Convert.FromBase64String(cipherText);

      using Aes aes = Aes.Create();
      aes.Key = Encoding.UTF8.GetBytes(key);
      aes.IV = iv;
      ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

      using var memoryStream = new MemoryStream(buffer);
      using var cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read);
      using var streamReader = new StreamReader(cryptoStream);
      return streamReader.ReadToEnd();
    }
  }
}
