using AutoMapper;
using JoergIsAGeek.ServiceProxy.Authentication;
using System.Threading;
using System.Threading.Tasks;
using ID = Microsoft.AspNetCore.Identity;
using VM = JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication {
  internal class CustomRoleStore : ID.IRoleStore<VM.RoleViewModel> {

    private readonly RoleServiceClient _authSrvClient;
    private readonly IMapper _mapper;

    public CustomRoleStore(RoleServiceClient client, IMapper mapper) {
      _authSrvClient = client;
      _mapper = mapper;
    }

    public async Task<ID.IdentityResult> CreateAsync(VM.RoleViewModel role, CancellationToken cancellationToken) {
      var appRole = _mapper.Map<ApplicationIdentityRoleDto>(role);
      await _authSrvClient.CreateRoleAsync(appRole, cancellationToken);
      return ID.IdentityResult.Success;
    }

    public Task<ID.IdentityResult> DeleteAsync(VM.RoleViewModel role, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public void Dispose() {
    }

    public Task<VM.RoleViewModel> FindByIdAsync(string roleId, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task<VM.RoleViewModel> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task<string> GetNormalizedRoleNameAsync(VM.RoleViewModel role, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task<string> GetRoleIdAsync(VM.RoleViewModel role, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task<string> GetRoleNameAsync(VM.RoleViewModel role, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task SetNormalizedRoleNameAsync(VM.RoleViewModel role, string normalizedName, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task SetRoleNameAsync(VM.RoleViewModel role, string roleName, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }

    public Task<ID.IdentityResult> UpdateAsync(VM.RoleViewModel role, CancellationToken cancellationToken) {
      throw new System.NotImplementedException();
    }
  }
}