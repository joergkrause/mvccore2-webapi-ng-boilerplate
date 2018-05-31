// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace JoergIsAGeek.ServiceProxy.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    public partial class MachineDto
    {
        /// <summary>
        /// Initializes a new instance of the MachineDto class.
        /// </summary>
        public MachineDto()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the MachineDto class.
        /// </summary>
        public MachineDto(int? id = default(int?), string name = default(string), string location = default(string), bool? hasDevices = default(bool?))
        {
            Id = id;
            Name = name;
            Location = location;
            HasDevices = hasDevices;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public int? Id { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "location")]
        public string Location { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "hasDevices")]
        public bool? HasDevices { get; set; }

    }
}
