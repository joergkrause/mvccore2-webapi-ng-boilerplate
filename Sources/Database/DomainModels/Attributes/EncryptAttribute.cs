using System;
using System.Collections.Generic;
using System.Text;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels.Attributes {

  /// <summary>
  /// Defines whether the context shall encrypt and the repo/Uow instance shall decrypt.
  /// 
  /// Just put this on any string type property. The encryption happens automatically in the
  /// Context, CryptoInterceptor (currently Auth module only).
  /// The descryption is best places in a BeforeMap handler provided by Automapper that
  /// provides the original values to the mapping algorithm.
  /// </summary>
  [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
  public class EncryptAttribute : Attribute {
  }
}
