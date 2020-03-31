using System;

namespace JoergIsAGeek.Workshop.Enterprise.DomainModels
{
  /// <summary>
  /// Make any table derived here auditable by adding defaults.
  /// These values are set globally in the SaveChanges method by an interceptor.
  /// </summary>
  public interface IAuditableEntityBase
  {
    DateTime CreatedAt { get; set; }

    DateTime ModifiedAt { get; set; }

    string CreatedBy { get; set; }

    string ModifiedBy { get; set; }

  }
}