// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace JoergIsAGeek.Workshop.Enterprise.WebFrontEnd.ServiceProxy
{
    using Microsoft.Rest;
    using Models;
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// </summary>
    public partial interface IEnterpriseServiceAPI : System.IDisposable
    {
        /// <summary>
        /// The base URI of the service.
        /// </summary>
        System.Uri BaseUri { get; set; }

        /// <summary>
        /// Gets or sets json serialization settings.
        /// </summary>
        JsonSerializerSettings SerializationSettings { get; }

        /// <summary>
        /// Gets or sets json deserialization settings.
        /// </summary>
        JsonSerializerSettings DeserializationSettings { get; }


        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<ApplicationUserDto>>> ApiAuthServiceUserGetWithHttpMessagesAsync(Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IdentityResult>> ApiAuthServiceUserPutWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IdentityResult>> ApiAuthServiceUserPostWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='userId'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ApplicationUserDto>> ApiAuthServiceUserFindByIdByUserIdGetWithHttpMessagesAsync(string userId, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='normalizedUserName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ApplicationUserDto>> ApiAuthServiceUserFindByNameByNormalizedUserNameGetWithHttpMessagesAsync(string normalizedUserName, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceUserNormalizedNameGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='normalizedName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceUserNormalizedNamePutWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), string normalizedName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceUserIdGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceUserNameGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceUserNamePutWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceUserPasswordHashGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='userDto'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceUserPasswordHashPutWithHttpMessagesAsync(ApplicationUserDto userDto = default(ApplicationUserDto), string passwordHash = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='userDto'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<bool?>> ApiAuthServiceUserHasPasswordGetWithHttpMessagesAsync(ApplicationUserDto userDto = default(ApplicationUserDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='normalizedEmail'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ApplicationUserDto>> ApiAuthServiceUserFindByEmailByNormalizedEmailGetWithHttpMessagesAsync(string normalizedEmail, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceUserEmailGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceUserEmailPutWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), string email = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<bool?>> ApiAuthServiceUserEmailConfirmedGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='confirmed'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceUserEmailConfirmedPutWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), bool? confirmed = default(bool?), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceUserNormalizedEmailGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='user'>
        /// </param>
        /// <param name='normalizedEmail'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceUserNormalizedEmailPutWithHttpMessagesAsync(ApplicationUserDto user = default(ApplicationUserDto), string normalizedEmail = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<ClaimDto>>> ApiAuthServiceClaimsGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='claims'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceClaimsPutWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), IList<object> claims = default(IList<object>), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='type'>
        /// </param>
        /// <param name='value'>
        /// </param>
        /// <param name='newType'>
        /// </param>
        /// <param name='newValue'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceClaimsPostWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), string type = default(string), string value = default(string), string newType = default(string), string newValue = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='claims'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceClaimsDeleteWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), IList<object> claims = default(IList<object>), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='roleName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceRoleAddToRolePutWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), string roleName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='roleName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceRoleRemoveFromRoleDeleteWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), string roleName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<string>>> ApiAuthServiceRoleForUserGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='passwordHash'>
        /// </param>
        /// <param name='emailConfirmed'>
        /// </param>
        /// <param name='email'>
        /// </param>
        /// <param name='userName'>
        /// </param>
        /// <param name='roleName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<bool?>> ApiAuthServiceRoleIsInRoleGetWithHttpMessagesAsync(string id = default(string), string passwordHash = default(string), bool? emailConfirmed = default(bool?), string email = default(string), string userName = default(string), string roleName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='roleName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<ApplicationUserDto>>> ApiAuthServiceRoleUsersInRoleByRoleNameGetWithHttpMessagesAsync(string roleName, Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='role'>
        /// </param>
        /// <param name='roleName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceRoleSetIdentityNamePutWithHttpMessagesAsync(ApplicationIdentityRoleDto role = default(ApplicationIdentityRoleDto), string roleName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='role'>
        /// </param>
        /// <param name='normalizedName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse> ApiAuthServiceRoleSetNormalizedNamePutWithHttpMessagesAsync(ApplicationIdentityRoleDto role = default(ApplicationIdentityRoleDto), string normalizedName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<ApplicationIdentityRoleDto>>> ApiAuthServiceRoleGetWithHttpMessagesAsync(Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='role'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IdentityResult>> ApiAuthServiceRolePutWithHttpMessagesAsync(ApplicationIdentityRoleDto role = default(ApplicationIdentityRoleDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='role'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IdentityResult>> ApiAuthServiceRolePostWithHttpMessagesAsync(ApplicationIdentityRoleDto role = default(ApplicationIdentityRoleDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='role'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IdentityResult>> ApiAuthServiceRoleIdentityDeleteWithHttpMessagesAsync(ApplicationIdentityRoleDto role = default(ApplicationIdentityRoleDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='roleId'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ApplicationIdentityRoleDto>> ApiAuthServiceRoleFindByIdGetWithHttpMessagesAsync(string roleId = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='normalizedRoleName'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<ApplicationIdentityRoleDto>> ApiAuthServiceRoleFindByNameGetWithHttpMessagesAsync(string normalizedRoleName = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='name'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceRoleIdentityIdGetWithHttpMessagesAsync(string id = default(string), string name = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='name'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceRoleIdentityNameGetWithHttpMessagesAsync(string id = default(string), string name = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='name'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<string>> ApiAuthServiceRoleNormalizedNameGetWithHttpMessagesAsync(string id = default(string), string name = default(string), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='machine'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<bool?>> ApiMachineServiceAddPostWithHttpMessagesAsync(MachineDto machine = default(MachineDto), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<MachineDto>>> ApiMachineServiceGetAllGetWithHttpMessagesAsync(Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='id'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<MachineDto>> ApiMachineServiceGetGetWithHttpMessagesAsync(int? id = default(int?), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

        /// <param name='value'>
        /// </param>
        /// <param name='customHeaders'>
        /// The headers that will be added to request.
        /// </param>
        /// <param name='cancellationToken'>
        /// The cancellation token.
        /// </param>
        Task<HttpOperationResponse<IList<MachineDto>>> ApiMachineServiceGetByValGetWithHttpMessagesAsync(double? value = default(double?), Dictionary<string, List<string>> customHeaders = null, CancellationToken cancellationToken = default(CancellationToken));

    }
}
