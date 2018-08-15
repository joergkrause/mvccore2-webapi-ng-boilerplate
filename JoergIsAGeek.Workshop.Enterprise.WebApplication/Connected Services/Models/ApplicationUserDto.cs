// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class ApplicationUserDto
    {
        /// <summary>
        /// Initializes a new instance of the ApplicationUserDto class.
        /// </summary>
        public ApplicationUserDto()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the ApplicationUserDto class.
        /// </summary>
        public ApplicationUserDto(string id = default(string), string pwHash = default(string), bool? emailConf = default(bool?), string email = default(string), string name = default(string))
        {
            Id = id;
            PwHash = pwHash;
            EmailConf = emailConf;
            Email = email;
            Name = name;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "PwHash")]
        public string PwHash { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "EmailConf")]
        public bool? EmailConf { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "Email")]
        public string Email { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }

    }
}
