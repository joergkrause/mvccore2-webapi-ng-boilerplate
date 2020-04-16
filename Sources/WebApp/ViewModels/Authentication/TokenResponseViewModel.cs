using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System.Runtime.Serialization;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication {

  public class TokenResponseViewModel
  {
    [JsonPropertyName("id")]
    public string Id { get; set; }

    [JsonPropertyName("authToken")]
    public string AuthToken { get; set; }

    [JsonPropertyName("expiresIn")]
    public int ExpiresIn { get; set; }

  }
}
