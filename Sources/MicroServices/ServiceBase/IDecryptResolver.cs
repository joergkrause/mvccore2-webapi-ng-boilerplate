namespace JoergIsAGeek.Workshop.Enterprise.ServiceLayer.Mappings {
  public interface IDecryptResolver {
    void Decrypt<TS>(TS model) where TS : class;
  }
}