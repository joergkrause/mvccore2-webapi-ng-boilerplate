using System.Threading;
using System.Threading.Tasks;
using VM = JoergIsAGeek.Workshop.Enterprise.WebApplication.ViewModels.Authentication;
using ID = Microsoft.AspNetCore.Identity;
using AuthServiceReference;

namespace JoergIsAGeek.Workshop.Enterprise.WebApplication
{
  internal class CustomRoleStore : ID.IRoleStore<VM.ApplicationIdentityRole>
  {

    private AuthSrvClient _authSrvClient;

    public CustomRoleStore(AuthSrvClient client)
    {
      _authSrvClient = client;
    }

    public Task<ID.IdentityResult> CreateAsync(VM.ApplicationIdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<ID.IdentityResult> DeleteAsync(VM.ApplicationIdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public void Dispose()
    {
      throw new System.NotImplementedException();
    }

    public Task<VM.ApplicationIdentityRole> FindByIdAsync(string roleId, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<VM.ApplicationIdentityRole> FindByNameAsync(string normalizedRoleName, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<string> GetNormalizedRoleNameAsync(VM.ApplicationIdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<string> GetRoleIdAsync(VM.ApplicationIdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<string> GetRoleNameAsync(VM.ApplicationIdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task SetNormalizedRoleNameAsync(VM.ApplicationIdentityRole role, string normalizedName, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task SetRoleNameAsync(VM.ApplicationIdentityRole role, string roleName, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }

    public Task<ID.IdentityResult> UpdateAsync(VM.ApplicationIdentityRole role, CancellationToken cancellationToken)
    {
      throw new System.NotImplementedException();
    }
  }
}