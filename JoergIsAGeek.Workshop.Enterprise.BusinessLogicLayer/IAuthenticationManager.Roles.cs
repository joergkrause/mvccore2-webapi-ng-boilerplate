using JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer.Authentication;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JoergIsAGeek.Workshop.Enterprise.BusinessLogicLayer
{
  public partial interface IAuthenticationManager
  {

    IdentityResult CreateRole(ApplicationIdentityRoleDto role);

    IdentityResult DeleteRole(ApplicationIdentityRoleDto role);

    ApplicationIdentityRoleDto FindRoleById(string roleId);

    ApplicationIdentityRoleDto FindRoleByName(string normalizedRoleName);

    string GetNormalizedRoleName(ApplicationIdentityRoleDto role);

    string GetIdentityRoleDtoId(ApplicationIdentityRoleDto role);

    string GetIdentityRoleDtoName(ApplicationIdentityRoleDto role);

    void SetNormalizedRoleName(ApplicationIdentityRoleDto role, string normalizedName);

    void SetIdentityRoleDtoName(ApplicationIdentityRoleDto role, string roleName);

    IdentityResult UpdateRole(ApplicationIdentityRoleDto role);
  }
}
