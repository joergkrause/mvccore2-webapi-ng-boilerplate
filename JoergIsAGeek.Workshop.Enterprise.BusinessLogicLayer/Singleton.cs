namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer {


  // Not in use, we make it a Singleton by using the DI container
  public class Singleton {

    static readonly volatile Manager instance;

    static Manager Get {
      get {        
        if (instance == null) {
          lock (o) {
            if (instance == null) {
              instance = new Manager();
            }
          }
        }
        return instance;
      }
  }
}